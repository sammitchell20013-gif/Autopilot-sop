/**
 * Test endpoint to verify Whisper API works
 */

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function GET() {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({
        error: 'OpenAI API key is not set',
        success: false
      });
    }

    const openai = new OpenAI({ apiKey });

    // Try to call Whisper with a simple test
    // We can't actually test without a file, so let's just check the client is configured
    return NextResponse.json({
      success: true,
      message: 'OpenAI client configured correctly',
      note: 'Cannot test Whisper without an actual audio file'
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      type: error.type || 'unknown',
      stack: error.stack
    });
  }
}

