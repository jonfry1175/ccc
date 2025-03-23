import { SupabaseClient } from '@supabase/supabase-js';

export const migration = {
  name: '001_create_tables',
  up: async (supabase: SupabaseClient) => {
    // Create migrations table first
    const { error: migrationTableError } = await supabase
      .from('migrations')
      .select('name')
      .limit(1)
      .maybeSingle();

    if (migrationTableError?.message.includes('does not exist')) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
        },
        body: JSON.stringify({
          sql_string: `
            CREATE TABLE IF NOT EXISTS migrations (
              id SERIAL PRIMARY KEY,
              name VARCHAR(255) NOT NULL UNIQUE,
              applied_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
          `
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to create migrations table: ${await response.text()}`);
      }
    }

    // Create candidate table
    const candidateResponse = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify({
        sql_string: `
          CREATE TABLE IF NOT EXISTS candidate (
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            date_of_birth TIMESTAMP WITH TIME ZONE,
            gender TEXT,
            passport_id TEXT,
            email TEXT NOT NULL,
            whatsapp_number TEXT NOT NULL,
            department TEXT NOT NULL,
            position TEXT NOT NULL,
            cv_url TEXT,
            certificate_url TEXT
          );
        `
      })
    });

    if (!candidateResponse.ok) {
      throw new Error(`Failed to create candidate table: ${await candidateResponse.text()}`);
    }

    // Create partner table
    const partnerResponse = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify({
        sql_string: `
          CREATE TABLE IF NOT EXISTS partner (
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone_number TEXT NOT NULL,
            company_name TEXT NOT NULL,
            company_website TEXT,
            country TEXT NOT NULL,
            message TEXT
          );
        `
      })
    });

    if (!partnerResponse.ok) {
      throw new Error(`Failed to create partner table: ${await partnerResponse.text()}`);
    }
  },

  down: async (supabase: SupabaseClient) => {
    // Drop tables in reverse order
    const dropPartnerResponse = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify({
        sql_string: 'DROP TABLE IF EXISTS partner;'
      })
    });

    if (!dropPartnerResponse.ok) {
      throw new Error(`Failed to drop partner table: ${await dropPartnerResponse.text()}`);
    }

    const dropCandidateResponse = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify({
        sql_string: 'DROP TABLE IF EXISTS candidate;'
      })
    });

    if (!dropCandidateResponse.ok) {
      throw new Error(`Failed to drop candidate table: ${await dropCandidateResponse.text()}`);
    }
  }
}; 