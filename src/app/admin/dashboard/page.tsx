"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { UserIcon, FileIcon, BuildingIcon, BarChart3Icon, DatabaseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [totalCandidates, setTotalCandidates] = useState<number>(0);
  const [totalPartners, setTotalPartners] = useState<number>(0);
  const [totalFiles, setTotalFiles] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [setupStatus, setSetupStatus] = useState<string>('');
  const [isSettingUp, setIsSettingUp] = useState<boolean>(false);
  const [migrationResults, setMigrationResults] = useState<string[]>([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Get candidates count
        const { count: candidatesCount, error: candidatesError } = await supabase
          .from('candidate')
          .select('*', { count: 'exact', head: true });

        if (candidatesError) throw candidatesError;
        setTotalCandidates(candidatesCount || 0);

        // Get partners count
        const { count: partnersCount, error: partnersError } = await supabase
          .from('partner')
          .select('*', { count: 'exact', head: true });

        if (partnersError) throw partnersError;
        setTotalPartners(partnersCount || 0);

        // Get files from storage
        const { data: files, error: filesError } = await supabase
          .storage
          .from('marina-prima-sukses-web')
          .list();

        if (filesError) throw filesError;
        setTotalFiles(files?.length || 0);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  // Extract fetchStats function outside useEffect for reuse
  const fetchStats = async () => {
    try {
      // Get candidates count
      const { count: candidatesCount, error: candidatesError } = await supabase
        .from('candidate')
        .select('*', { count: 'exact', head: true });

      if (candidatesError) throw candidatesError;
      setTotalCandidates(candidatesCount || 0);

      // Get partners count
      const { count: partnersCount, error: partnersError } = await supabase
        .from('partner')
        .select('*', { count: 'exact', head: true });

      if (partnersError) throw partnersError;
      setTotalPartners(partnersCount || 0);

      // Get files from storage
      const { data: files, error: filesError } = await supabase
        .storage
        .from('marina-prima-sukses-web')
        .list();

      if (filesError) throw filesError;
      setTotalFiles(files?.length || 0);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const runMigrations = async () => {
    try {
      setIsSettingUp(true);
      setSetupStatus('Running database migrations...');
      
      const response = await fetch('/api/migrations/run');
      const data = await response.json();
      
      if (data.success) {
        if (data.appliedMigrations.length > 0) {
          setMigrationResults(data.appliedMigrations);
          setSetupStatus(`Migrations successful! Applied: ${data.appliedMigrations.length} migrations`);
        } else {
          setSetupStatus('All migrations are already applied');
        }
        // Refresh stats to show new data
        fetchStats();
      } else {
        setSetupStatus(`Migration failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error: any) {
      setSetupStatus(`Migration error: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSettingUp(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of application submissions and files
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Candidates
            </CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCandidates}</div>
            <p className="text-xs text-muted-foreground">
              Job applications submitted
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Partners
            </CardTitle>
            <BuildingIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPartners}</div>
            <p className="text-xs text-muted-foreground">
              Partnership applications
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Files
            </CardTitle>
            <FileIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFiles}</div>
            <p className="text-xs text-muted-foreground">
              Uploaded documents
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Database Migrations
            </CardTitle>
            <DatabaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm mb-2">
              {setupStatus || 'Run database migrations to set up tables and storage'}
            </div>
            {migrationResults.length > 0 && (
              <div className="mt-2 text-xs text-muted-foreground space-y-1">
                <p>Applied migrations:</p>
                <ul className="list-disc pl-4">
                  {migrationResults.map((migration, index) => (
                    <li key={index}>{migration}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              onClick={runMigrations} 
              disabled={isSettingUp}
              className="w-full"
              variant="outline"
            >
              {isSettingUp ? 'Running Migrations...' : 'Run Migrations'}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            The latest submissions from candidates and partners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            View detailed information in the Candidates and Partners tabs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 