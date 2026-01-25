/**
 * API Route: Generate SOP from Text Prompt
 * Handles SOP generation from user-provided text descriptions
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateSOPSteps } from '@/lib/openai/client';
import { moderateTextPrompt } from '@/lib/openai/moderation';
import { createClient } from '@supabase/supabase-js';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Initialize Supabase client with service role for server-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseServiceKey) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY is not set in environment variables!');
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export async function POST(request: NextRequest) {
  try {
    // Get the authenticated user
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    console.log('🧠 Generating SOP from prompt...');
    console.log('📝 Title:', title);
    console.log('📝 Description length:', description.length, 'characters');

    // Moderate content before processing
    const moderationResult = await moderateTextPrompt(title, description);
    
    if (moderationResult.flagged) {
      console.error('⚠️ Prompt flagged by moderation:', moderationResult.categories);
      
      return NextResponse.json(
        { 
          error: moderationResult.message || 'Content violates our content policy',
          flagged: true,
          categories: moderationResult.categories,
        },
        { status: 400 }
      );
    }

    // Create initial SOP with pending status
    const { data: sopData, error: sopError } = await supabaseAdmin
      .from('sops')
      .insert({
        user_id: user.id,
        title: title,
        description: 'AI is generating steps from your description...',
        folder: 'AI Generated',
        tags: ['ai-generated', 'prompt'],
        steps: [
          {
            id: 'temp-1',
            order: 1,
            title: '🤖 AI Processing',
            description: 'Please wait while we generate step-by-step instructions from your description...',
          },
        ],
      })
      .select()
      .single();

    if (sopError || !sopData) {
      console.error('❌ Failed to create SOP:', sopError);
      return NextResponse.json(
        { error: 'Failed to create SOP' },
        { status: 500 }
      );
    }

    console.log('✅ SOP created with ID:', sopData.id);

    // Generate SOP steps with GPT using the description as "transcript"
    const sopResult = await generateSOPSteps(description, title);

    if (!sopResult.success || !sopResult.data) {
      console.error('❌ SOP generation failed:', sopResult.error);
      
      // Update SOP with error status
      await supabaseAdmin
        .from('sops')
        .update({
          description: `Failed to generate steps: ${sopResult.error}`,
          steps: [
            {
              id: 'error-1',
              order: 1,
              title: '❌ Generation Failed',
              description: 'AI could not generate steps from your description. Please try again with more detail.',
            },
          ],
        })
        .eq('id', sopData.id);

      return NextResponse.json(
        { error: sopResult.error || 'SOP generation failed' },
        { status: 500 }
      );
    }

    console.log('✅ SOP generated with', sopResult.data.steps.length, 'steps');

    // Format steps for database
    const formattedSteps = sopResult.data.steps.map((step: any, index: number) => ({
      id: `step-${index + 1}`,
      order: index + 1,
      title: step.title,
      description: step.description,
      tips: step.tips || [],
      warnings: step.warnings || [],
      duration: step.duration || '',
    }));

    // Update SOP with generated data
    const { error: updateError } = await supabaseAdmin
      .from('sops')
      .update({
        description: sopResult.data.description || description.substring(0, 200),
        steps: formattedSteps,
        estimated_time: sopResult.data.estimatedTime || '',
        difficulty: sopResult.data.difficulty || 'intermediate',
        updated_at: new Date().toISOString(),
      })
      .eq('id', sopData.id);

    if (updateError) {
      console.error('❌ Failed to update SOP:', updateError);
      return NextResponse.json(
        { error: 'Failed to update SOP with generated steps' },
        { status: 500 }
      );
    }

    console.log('✅ SOP updated successfully');

    return NextResponse.json({
      success: true,
      sopId: sopData.id,
    });

  } catch (error: any) {
    console.error('❌ Error in generate-from-prompt:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

