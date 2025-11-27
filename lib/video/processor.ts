/**
 * Video Processing Utilities
 * Handles video file processing, audio extraction, and screenshot generation
 */

/**
 * Extract audio from video file
 * Note: This is a client-side placeholder. In production, use FFmpeg on server.
 */
export async function extractAudioFromVideo(videoFile: File): Promise<Blob | null> {
  try {
    console.log('🎵 Extracting audio from video...');
    
    // For now, we'll return the video file itself as audio
    // In production, you'd use FFmpeg to extract audio on the server
    // The Whisper API can handle video files directly
    
    return videoFile;
  } catch (error) {
    console.error('❌ Audio extraction error:', error);
    return null;
  }
}

/**
 * Generate thumbnails/screenshots from video at specific timestamps
 */
export async function generateScreenshots(
  videoFile: File,
  timestamps: number[] = []
): Promise<{ timestamp: number; dataUrl: string }[]> {
  return new Promise((resolve) => {
    const screenshots: { timestamp: number; dataUrl: string }[] = [];
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      resolve([]);
      return;
    }

    video.preload = 'metadata';
    video.src = URL.createObjectURL(videoFile);

    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // If no timestamps provided, generate at intervals
      const duration = video.duration;
      if (timestamps.length === 0) {
        // Generate 5 evenly spaced screenshots
        const interval = duration / 6;
        for (let i = 1; i <= 5; i++) {
          timestamps.push(interval * i);
        }
      }

      let currentIndex = 0;

      const captureFrame = () => {
        if (currentIndex >= timestamps.length) {
          URL.revokeObjectURL(video.src);
          resolve(screenshots);
          return;
        }

        video.currentTime = timestamps[currentIndex];
      };

      video.addEventListener('seeked', () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        
        screenshots.push({
          timestamp: timestamps[currentIndex],
          dataUrl,
        });

        currentIndex++;
        captureFrame();
      });

      captureFrame();
    });

    video.addEventListener('error', () => {
      console.error('❌ Screenshot generation error');
      resolve([]);
    });
  });
}

/**
 * Get video metadata
 */
export async function getVideoMetadata(videoFile: File): Promise<{
  duration: number;
  width: number;
  height: number;
  size: number;
}> {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(videoFile);

    video.addEventListener('loadedmetadata', () => {
      resolve({
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight,
        size: videoFile.size,
      });
      URL.revokeObjectURL(video.src);
    });

    video.addEventListener('error', () => {
      resolve({
        duration: 0,
        width: 0,
        height: 0,
        size: videoFile.size,
      });
    });
  });
}

/**
 * Format duration from seconds to readable string
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
}

