import { NextResponse } from 'next/server';
import { setupStorage } from '@/lib/storage';

export async function POST() {
  try {
    const result = await setupStorage();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Storage setup error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 