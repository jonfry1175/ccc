import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function setupStorage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  try {
    // Create storage bucket
    const { error: bucketError } = await supabase.storage.createBucket(
      "marina-prima-sukses-web",
      {
        public: true, // Make bucket public
        fileSizeLimit: 10485760, // 10MB in bytes
      },
    );

    // Ignore if bucket already exists
    if (bucketError && bucketError.message !== "Bucket already exists") {
      throw bucketError;
    }

    return { success: true };
  } catch (error: any) {
    console.error("Storage setup error:", error);
    return { success: false, error: error.message };
  }
}

export function getPublicUrl(path: string) {
  const supabase = createClientComponentClient();
  const { data } = supabase.storage
    .from("marina-prima-sukses-web")
    .getPublicUrl(path);
  return data.publicUrl;
}

// Function to convert storage URL to path
export function getStoragePath(url: string | null) {
  if (!url) return null;

  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split("/");
    // Handle both public and signed URLs
    const startIndex = pathParts.includes("public")
      ? pathParts.indexOf("public") + 1
      : pathParts.indexOf("sign") + 1;

    return pathParts.slice(startIndex).join("/");
  } catch (error) {
    console.error("Error parsing URL:", error);
    return null;
  }
}
