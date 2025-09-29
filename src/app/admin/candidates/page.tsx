"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Candidate } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { format } from "date-fns";

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCandidates() {
      try {
        const { data, error } = await supabase
          .from("candidate")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setCandidates(data || []);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCandidates();
  }, []);

  const openFile = (url: string) => {
    window.open(url, "_blank");
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
        <h1 className="text-3xl font-bold">Candidates</h1>
        <p className="text-muted-foreground">All candidate job applications</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Candidate Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>Documents</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    No candidate applications found
                  </TableCell>
                </TableRow>
              ) : (
                candidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell>
                      {candidate.first_name} {candidate.last_name}
                    </TableCell>
                    <TableCell>{candidate.email}</TableCell>
                    <TableCell>{candidate.department}</TableCell>
                    <TableCell>{candidate.position}</TableCell>
                    <TableCell>
                      {format(new Date(candidate.created_at), "PPP")}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {candidate.cv_url && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => openFile(candidate.cv_url)}
                          >
                            <FileText className="h-4 w-4" />
                            <span>CV</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        )}
                        {candidate.certificate_url && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => openFile(candidate.certificate_url)}
                          >
                            <FileText className="h-4 w-4" />
                            <span>Cert</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
