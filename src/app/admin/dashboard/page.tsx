"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon, BuildingIcon } from "lucide-react";

export default function AdminDashboard() {
  const [totalCandidates, setTotalCandidates] = useState<number>(0);
  const [totalPartners, setTotalPartners] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Get candidates count
        const { count: candidatesCount, error: candidatesError } =
          await supabase
            .from("candidate")
            .select("*", { count: "exact", head: true });

        if (candidatesError) throw candidatesError;
        setTotalCandidates(candidatesCount || 0);

        // Get partners count
        const { count: partnersCount, error: partnersError } = await supabase
          .from("partner")
          .select("*", { count: "exact", head: true });

        if (partnersError) throw partnersError;
        setTotalPartners(partnersCount || 0);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

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
        <h1 className="text-3xl font-bold">Dasbor</h1>
        <p className="text-muted-foreground">
          Gambaran umum pengajuan aplikasi
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Kandidat
            </CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCandidates}</div>
            <p className="text-xs text-muted-foreground">
              Aplikasi pekerjaan yang diajukan
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Mitra
            </CardTitle>
            <BuildingIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPartners}</div>
            <p className="text-xs text-muted-foreground">
              Aplikasi kemitraan
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
