/**
 * OpenAI API Client
 * Handles all interactions with OpenAI API
 */

import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Transcribe audio using Whisper API
 */
export async function transcribeAudio(audioBuffer: Buffer, filename: string) {
  let tempFilePath: string | null = null;
  
  try {
    console.log('🎤 Starting transcription with Whisper...');
    console.log('📦 File size:', Math.round(audioBuffer.length / 1024 / 1024), 'MB');
    
    // Check file size (Whisper has a 25MB limit)
    const fileSizeMB = audioBuffer.length / 1024 / 1024;
    if (fileSizeMB > 25) {
      return {
        success: false,
        error: `File too large for Whisper API (${Math.round(fileSizeMB)}MB). Maximum is 25MB. Please use a shorter video.`,
      };
    }
    
    // Write buffer to temporary file (most reliable method for Node.js)
    const tempDir = os.tmpdir();
    tempFilePath = path.join(tempDir, `whisper-${Date.now()}-${filename}`);
    console.log('💾 Writing to temp file:', tempFilePath);
    fs.writeFileSync(tempFilePath, audioBuffer);

    console.log('🌐 Sending to Whisper API...');
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(tempFilePath),
      model: 'whisper-1',
      response_format: 'text',
    });

    console.log('✅ Transcription complete! Length:', transcription.length);
    
    // Clean up temp file
    if (tempFilePath && fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
      console.log('🗑️ Temp file deleted');
    }
    
    return {
      success: true,
      text: transcription,
      segments: [],
    };
  } catch (error: any) {
    // Clean up temp file on error
    if (tempFilePath && fs.existsSync(tempFilePath)) {
      try {
        fs.unlinkSync(tempFilePath);
      } catch (e) {
        console.error('Failed to delete temp file:', e);
      }
    }
    
    console.error('❌ Transcription error:', error);
    console.error('❌ Error type:', error.type);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error status:', error.status);
    console.error('❌ Full error object:', JSON.stringify(error, null, 2));
    
    // More specific error message
    let errorMessage = 'Failed to transcribe audio';
    if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Network connection to OpenAI failed. Check your internet connection.';
    } else if (error.status === 401) {
      errorMessage = 'Invalid OpenAI API key';
    } else if (error.status === 429) {
      errorMessage = 'OpenAI rate limit exceeded or no credits';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Generate SOP steps from transcript using GPT-4
 */
export async function generateSOPSteps(transcript: string, videoTitle: string) {
  try {
    console.log('🧠 Generating SOP steps with GPT-4...');

    const prompt = `You are an expert at creating clear, actionable Standard Operating Procedures (SOPs).

Given the following video transcript of a training or instructional video, create a structured SOP with clear steps.

VIDEO TITLE: ${videoTitle}

TRANSCRIPT:
${transcript}

Generate a comprehensive SOP in the following JSON format:
{
  "title": "Clear, descriptive title for this SOP",
  "description": "Brief 1-2 sentence description of what this SOP covers",
  "estimatedTime": "Estimated time to complete (e.g., '15 minutes')",
  "difficulty": "beginner, intermediate, or advanced",
  "steps": [
    {
      "title": "Step title",
      "description": "Detailed description of what to do in this step",
      "tips": ["Optional helpful tip 1", "Optional helpful tip 2"],
      "warnings": ["Optional warning if applicable"],
      "duration": "Estimated time for this step"
    }
  ],
  "prerequisites": ["Any required tools, knowledge, or setup"],
  "notes": ["Any additional notes or context"]
}

IMPORTANT:
- Create clear, actionable steps (aim for 5-15 steps)
- Each step should be specific and easy to follow
- Include tips and warnings where relevant
- Make it beginner-friendly but comprehensive
- Focus on the "how" not just the "what"

Return ONLY valid JSON, no additional text.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using GPT-4o-mini (cheaper and faster, still excellent quality)
      messages: [
        {
          role: 'system',
          content: 'You are an expert at creating Standard Operating Procedures. You always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 3000,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No content returned from GPT-4');
    }

    const sopData = JSON.parse(content);
    console.log('✅ SOP steps generated!');

    return {
      success: true,
      data: sopData,
    };
  } catch (error: any) {
    console.error('❌ GPT-4 error:', error);
    return {
      success: false,
      error: error.message || 'Failed to generate SOP steps',
    };
  }
}

/**
 * Improve an existing SOP step with more detail
 */
export async function improveSOPStep(step: any, context: string) {
  try {
    const prompt = `Given this SOP step and context, provide more detailed, actionable instructions:

CONTEXT: ${context}

CURRENT STEP:
Title: ${step.title}
Description: ${step.description}

Enhance this step with:
1. More specific instructions
2. Helpful tips
3. Common pitfalls to avoid
4. Expected outcomes

Return in JSON format:
{
  "title": "Enhanced title",
  "description": "Enhanced detailed description",
  "tips": ["tip1", "tip2"],
  "warnings": ["warning1"],
  "expectedOutcome": "What should happen after this step"
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using GPT-4o-mini (cheaper and faster)
      messages: [
        {
          role: 'system',
          content: 'You are an expert at creating detailed, actionable instructions.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No content returned');
    }

    return {
      success: true,
      data: JSON.parse(content),
    };
  } catch (error: any) {
    console.error('❌ Improvement error:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

