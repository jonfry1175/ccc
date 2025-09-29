"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Partner } from "@/lib/types";
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
import { format } from "date-fns";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {},
  );

  useEffect(() => {
    async function fetchPartners() {
      try {
        const { data, error } = await supabase
          .from("partner")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPartners(data || []);
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPartners();
  }, []);

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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
        <h1 className="text-3xl font-bold">Mitra</h1>
        <p className="text-muted-foreground">Semua aplikasi kemitraan</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Aplikasi Kemitraan</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Perusahaan</TableHead>
                <TableHead>Negara</TableHead>
                <TableHead>Tanggal Melamar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    Tidak ada aplikasi kemitraan yang ditemukan
                  </TableCell>
                </TableRow>
              ) : (
                partners.map((partner) => (
                  <React.Fragment key={partner.id}>
                    <TableRow
                      className="cursor-pointer"
                      onClick={() => toggleRow(partner.id)}
                    >
                      <TableCell>
                        {expandedRows[partner.id] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </TableCell>
                      <TableCell>
                        {partner.first_name} {partner.last_name}
                      </TableCell>
                      <TableCell>{partner.email}</TableCell>
                      <TableCell>
                        <div>{partner.company_name}</div>
                        {partner.company_website && (
                          <a
                            href={
                              partner.company_website.startsWith("http")
                                ? partner.company_website
                                : `https://${partner.company_website}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-500 flex items-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {partner.company_website}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        )}
                      </TableCell>
                      <TableCell>{partner.country}</TableCell>
                      <TableCell>
                        {format(new Date(partner.created_at), "PPP")}
                      </TableCell>
                    </TableRow>
                    {expandedRows[partner.id] && (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="bg-muted/30 px-8 py-4"
                        >
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold">
                                Informasi Kontak
                              </h4>
                              <p>Telepon: {partner.phone_number}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Pesan</h4>
                              <div className="whitespace-pre-wrap bg-white p-4 rounded-md border mt-2">
                                {partner.message}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
