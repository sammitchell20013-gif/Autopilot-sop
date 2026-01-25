/**
 * Content Moderation Utilities
 * Uses OpenAI Moderation API to check for inappropriate content
 */

import { openai } from './client';

export interface ModerationResult {
  flagged: boolean;
  categories: string[];
  message?: string;
}

/**
 * Check content for policy violations using OpenAI Moderation API
 * Returns flagged: true if content violates policies
 */
export async function moderateContent(text: string): Promise<ModerationResult> {
  try {
    console.log('🛡️ Running content moderation check...');
    
    const moderation = await openai.moderations.create({
      input: text,
    });

    const result = moderation.results[0];
    
    if (result.flagged) {
      // Collect flagged categories
      const flaggedCategories: string[] = [];
      
      if (result.categories.hate) flaggedCategories.push('hate speech');
      if (result.categories['hate/threatening']) flaggedCategories.push('threatening hate speech');
      if (result.categories.harassment) flaggedCategories.push('harassment');
      if (result.categories['harassment/threatening']) flaggedCategories.push('threatening harassment');
      if (result.categories['self-harm']) flaggedCategories.push('self-harm');
      if (result.categories['self-harm/intent']) flaggedCategories.push('self-harm intent');
      if (result.categories['self-harm/instructions']) flaggedCategories.push('self-harm instructions');
      if (result.categories.sexual) flaggedCategories.push('sexual content');
      if (result.categories['sexual/minors']) flaggedCategories.push('sexual content involving minors');
      if (result.categories.violence) flaggedCategories.push('violence');
      if (result.categories['violence/graphic']) flaggedCategories.push('graphic violence');

      console.log('⚠️ Content flagged for:', flaggedCategories.join(', '));
      
      return {
        flagged: true,
        categories: flaggedCategories,
        message: `This content violates our content policy. It was flagged for: ${flaggedCategories.join(', ')}. Please review our Terms of Service for acceptable use.`,
      };
    }

    console.log('✅ Content passed moderation check');
    return {
      flagged: false,
      categories: [],
    };

  } catch (error: any) {
    console.error('❌ Moderation API error:', error);
    
    // If moderation API fails, log but don't block the request
    // (better to allow edge cases than break the service)
    console.warn('⚠️ Moderation check failed, allowing content through');
    return {
      flagged: false,
      categories: [],
    };
  }
}

/**
 * Moderate video transcript before processing
 */
export async function moderateVideoTranscript(transcript: string): Promise<ModerationResult> {
  console.log('🎥 Moderating video transcript...');
  return moderateContent(transcript);
}

/**
 * Moderate user text prompt before generating SOP
 */
export async function moderateTextPrompt(title: string, description: string): Promise<ModerationResult> {
  console.log('📝 Moderating text prompt...');
  
  // Check both title and description together
  const combinedText = `${title}\n\n${description}`;
  return moderateContent(combinedText);
}

