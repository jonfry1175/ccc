import { NextRequest, NextResponse } from 'next/server';
import { applyMigrations } from '@/lib/migrations';
import { migrations } from '@/lib/migrations/migrations';

export async function GET(request: NextRequest) {
  try {
    // Run all migrations in sequence
    const result = await applyMigrations(migrations);
    
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Migration execution error:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'Unknown error occurred'
    }, { status: 500 });
  }
} 