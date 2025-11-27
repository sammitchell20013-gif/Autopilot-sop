"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, Video, FileVideo, X, CheckCircle, AlertCircle, Loader, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { uploadVideo } from "@/lib/supabase/storage";
import { createSOP } from "@/lib/supabase/sops";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { canUploadVideo } from "@/lib/supabase/plan-limits";

export default function GeneratePage() {
  const router = useRouter();
  const { user } = useAuth();
  const { subscription } = useSubscription();
  const [canUpload, setCanUpload] = useState(true);
  const [uploadLimitMessage, setUploadLimitMessage] = useState("");
  
  const [file, setFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState("");
  const [processingError, setProcessingError] = useState("");
  const [sopId, setSopId] = useState<string | null>(null);

  // Check if user can upload videos
  useEffect(() => {
    if (subscription) {
      const check = canUploadVideo(subscription.plan, 0); // We'd track actual count in real app
      setCanUpload(check.allowed);
      setUploadLimitMessage(check.message || "");
    }
  }, [subscription]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check file size (max 100MB)
      if (selectedFile.size > 100 * 1024 * 1024) {
        setError("File size must be less than 100MB");
        return;
      }

      // Check file type
      if (!selectedFile.type.startsWith('video/')) {
        setError("Please upload a video file");
        return;
      }

      setFile(selectedFile);
      setError("");
      
      // Create preview URL
      const url = URL.createObjectURL(selectedFile);
      setVideoUrl(url);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile);
      const url = URL.createObjectURL(droppedFile);
      setVideoUrl(url);
      setError("");
    } else {
      setError("Please drop a video file");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!file || !user) {
      setError("Please select a video file");
      return;
    }

    setUploading(true);
    setError("");
    setUploadProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      // Upload video to storage
      const result = await uploadVideo(file, user.id);

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (result.success) {
        // Create initial SOP with video
        const sopResult = await createSOP({
          title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
          description: "AI is processing your video to generate steps...",
          folder: "Video Generated",
          tags: ["video", "ai-generated"],
          video_url: result.url,
          steps: [
            {
              id: "temp-1",
              order: 1,
              title: "🤖 AI Processing",
              description: "Please wait while we analyze your video and generate step-by-step instructions...",
            },
          ],
        });

        if (sopResult.success && sopResult.sop) {
          setSopId(sopResult.sop.id);
          setUploading(false);
          setUploadProgress(0);

          // Start AI processing
          setProcessing(true);
          setProcessingStatus("🎤 Transcribing audio with AI...");

          try {
            // Add timeout to fetch request (3 minutes max)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 180000); // 3 min timeout

            const response = await fetch("/api/process-video", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                sopId: sopResult.sop.id,
                videoUrl: result.url,
                videoPath: result.path,
                videoTitle: file.name.replace(/\.[^/.]+$/, ""),
              }),
              signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Server error: ${response.status} - ${errorText}`);
            }

            const data = await response.json();

            if (data.success) {
              setProcessingStatus("✅ SOP generated successfully!");
              setSuccess(true);
              setTimeout(() => {
                router.push(`/app/sops/${sopResult.sop?.id}`);
              }, 2000);
            } else {
              setError(data.error || "AI processing failed");
              setProcessing(false);
            }
          } catch (err: any) {
            console.error('Video processing error:', err);
            let errorMessage = "Failed to process video: ";
            
            if (err.name === 'AbortError') {
              errorMessage += "Request timed out (took longer than 3 minutes). Try a shorter video.";
            } else if (err.message.includes('Failed to fetch')) {
              errorMessage += "Cannot reach the server. Check if the dev server is running.";
            } else {
              errorMessage += err.message;
            }
            
            setError(errorMessage);
            setProcessing(false);
          }
        } else {
          setError(sopResult.error || "Failed to create SOP");
        }
      } else {
        setError(result.error || "Upload failed");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setVideoUrl("");
    setUploadProgress(0);
    setError("");
  };

  // Show upgrade message if can't upload videos
  if (!canUpload) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Generate SOP from Video
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Upload a training video and let AI create a structured SOP
          </p>

          <Card className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Video Upload - Pro Feature
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              {uploadLimitMessage}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/app/billing">
                <Button variant="primary" size="lg">
                  Upgrade to Pro
                </Button>
              </Link>
              <Link href="/app/sops/create">
                <Button variant="outline" size="lg">
                  Create SOP Manually
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Generate SOP from Video
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Upload a training video and let AI create a structured SOP
        </p>
      </motion.div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          {!file ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center hover:border-primary-500 transition-colors cursor-pointer"
            >
              <input
                type="file"
                id="video-upload"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="video-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Drop your video here or click to browse
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Supports MP4, MOV, AVI, and other video formats (max 100MB)
                </p>
                <div className="px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <FileVideo className="w-5 h-5" />
                  Choose Video File
                </div>
              </label>
            </div>
          ) : (
            <div>
              {/* Video Preview */}
              {videoUrl && (
                <div className="mb-6">
                  <video
                    src={videoUrl}
                    controls
                    className="w-full rounded-lg max-h-96"
                  />
                </div>
              )}

              {/* File Info */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FileVideo className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {file.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                {!uploading && (
                  <button
                    onClick={removeFile}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Uploading...
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* AI Processing Status */}
              {processing && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Loader className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" />
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      AI Processing
                    </p>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 ml-8">
                    {processingStatus}
                  </p>
                  <div className="mt-4 space-y-2 ml-8">
                    <div className="flex items-center gap-2 text-xs text-blue-500 dark:text-blue-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span>This may take 1-3 minutes depending on video length...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                      Video uploaded successfully!
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Redirecting to your new SOP...
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={handleUpload}
                  disabled={uploading || success}
                >
                  {uploading ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Success!
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 mr-2" />
                      Upload & Generate SOP
                    </>
                  )}
                </Button>
                {!uploading && !success && (
                  <Button variant="outline" onClick={removeFile}>
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card>
      </motion.div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Video Upload
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Upload training videos up to 100MB
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Loader className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              AI Processing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Coming soon: AI will analyze your video
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              SOP Generated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get structured SOPs instantly
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
