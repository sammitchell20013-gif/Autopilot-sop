/**
 * Test endpoint to verify environment variables
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const openaiKey = process.env.OPENAI_API_KEY;

  return NextResponse.json({
    supabaseUrl: supabaseUrl ? 'SET ✅' : 'MISSING ❌',
    serviceRoleKey: serviceKey ? `SET ✅ (${serviceKey.length} chars)` : 'MISSING ❌',
    openaiKey: openaiKey ? `SET ✅ (${openaiKey.length} chars)` : 'MISSING ❌',
  });
}

