import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nrxfjvpjxlzamlgbfqqg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to upload file to Supabase Storage
export async function uploadFile(
  bucket: string,
  filePath: string,
  file: File
) {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });
    
    if (error) throw error;
    return data.path;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

// Helper function to get public URL for a file
export function getFileUrl(bucket: string, filePath: string) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return data.publicUrl;
} 