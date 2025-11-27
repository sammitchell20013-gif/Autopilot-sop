/**
 * Test endpoint to verify OpenAI API connection
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

    // Try a simple API call
    const response = await openai.models.list();

    return NextResponse.json({
      success: true,
      message: 'OpenAI connection successful!',
      modelCount: response.data.length
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      type: error.type || 'unknown'
    });
  }
}

