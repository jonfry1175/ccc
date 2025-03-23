import { SupabaseClient, createClient } from '@supabase/supabase-js';

// Migration type definition
interface Migration {
  name: string;
  up: (supabase: SupabaseClient) => Promise<void>;
  down?: (supabase: SupabaseClient) => Promise<void>;
}

// Get Supabase admin client
const getServiceClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nrxfjvpjxlzamlgbfqqg.supabase.co';
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  
  return new SupabaseClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};

// Check if migration has been applied
const isMigrationApplied = async (supabase: SupabaseClient, migrationName: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('migrations')
    .select('name')
    .eq('name', migrationName)
    .maybeSingle();
  
  if (error && error.code === '42P01') {
    // Migrations table doesn't exist yet
    return false;
  }
  
  return !!data;
};

// Record migration as applied
const recordMigration = async (supabase: SupabaseClient, migrationName: string): Promise<void> => {
  await supabase
    .from('migrations')
    .insert({ name: migrationName });
};

async function executeSql(query: string): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/raw_sql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
      'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      query: query
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `SQL execution failed with status ${response.status}`);
  }
}

// Apply migrations
export async function applyMigrations(migrations: Migration[]) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  );

  const appliedMigrations: string[] = [];
  const errors: string[] = [];

  try {
    // Check if migrations table exists and create it if needed
    const { error: checkError } = await supabase
      .from('migrations')
      .select('name')
      .limit(1)
      .maybeSingle();

    if (checkError?.message.includes('does not exist')) {
      try {
        await executeSql(`
          CREATE TABLE IF NOT EXISTS public.migrations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            applied_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        `);
      } catch (error: any) {
        throw new Error(`Failed to create migrations table: ${error.message}`);
      }
    }

    // Get list of applied migrations
    const { data: appliedMigrationsData, error: fetchError } = await supabase
      .from('migrations')
      .select('name');

    if (fetchError) {
      throw new Error(`Failed to fetch applied migrations: ${fetchError.message}`);
    }

    const appliedMigrationNames = new Set(appliedMigrationsData?.map(m => m.name) || []);

    // Apply each migration that hasn't been applied yet
    for (const migration of migrations) {
      if (!appliedMigrationNames.has(migration.name)) {
        try {
          console.log(`Applying migration: ${migration.name}`);
          
          // Apply the migration
          await migration.up(supabase);

          // Record the migration as applied
          const { error: insertError } = await supabase
            .from('migrations')
            .insert({ name: migration.name });

          if (insertError) {
            throw new Error(`Failed to record migration: ${insertError.message}`);
          }

          appliedMigrations.push(migration.name);
          console.log(`Successfully applied migration: ${migration.name}`);
        } catch (error: any) {
          const errorMessage = `Failed to apply migration ${migration.name}: ${error.message}`;
          console.error(errorMessage);
          errors.push(errorMessage);
          // Stop applying further migrations if one fails
          break;
        }
      } else {
        console.log(`Skipping already applied migration: ${migration.name}`);
      }
    }

    return {
      success: errors.length === 0,
      appliedMigrations,
      errors: errors.length > 0 ? errors : undefined
    };
  } catch (error: any) {
    const errorMessage = `Migration system error: ${error.message}`;
    console.error(errorMessage);
    return {
      success: false,
      appliedMigrations,
      errors: [errorMessage]
    };
  }
} 