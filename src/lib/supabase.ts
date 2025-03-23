import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nrxfjvpjxlzamlgbfqqg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Regular client for client-side usage
export const supabase = createClient(supabaseUrl, supabaseKey);

// Admin client with service role key for storage operations
// This should only be used in server components or API routes
const getServiceClient = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  return createClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};

// Helper function to upload file to Supabase Storage
export async function uploadFile(
  bucket: string,
  filePath: string,
  file: File
) {
  try {
    // Use fetch to create a serverless function call that will handle the upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bucket', bucket);
    formData.append('filePath', filePath);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error uploading file');
    }
    
    const data = await response.json();
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