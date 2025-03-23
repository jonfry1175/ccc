"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
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
import { FileIcon, ExternalLink, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FileObject {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: any;
  bucket_id: string;
}

export default function UploadsPage() {
  const [files, setFiles] = useState<FileObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchFiles() {
      try {
        // Get all files from the storage bucket recursively
        const { data, error } = await supabase
          .storage
          .from('marina-prima-sukses-web')
          .list('', { sortBy: { column: 'name', order: 'asc' } });

        if (error) throw error;
        
        // Filter out folders (entries without metadata)
        const fileObjects = data || [];
        setFiles(fileObjects);
      } catch (error) {
        console.error('Error fetching files:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load files from storage",
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchFiles();
  }, [toast]);

  const getFileUrl = (filepath: string) => {
    const { data } = supabase.storage
      .from('marina-prima-sukses-web')
      .getPublicUrl(filepath);
    return data.publicUrl;
  };

  const downloadFile = (filepath: string, filename: string) => {
    const url = getFileUrl(filepath);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openFile = (filepath: string) => {
    const url = getFileUrl(filepath);
    window.open(url, '_blank');
  };

  const getFileType = (filename: string) => {
    const extension = filename.split('.').pop()?.toLowerCase();
    if (!extension) return 'Unknown';
    
    if (['pdf'].includes(extension)) return 'PDF';
    if (['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(extension)) return 'Image';
    if (['doc', 'docx'].includes(extension)) return 'Document';
    if (['xls', 'xlsx'].includes(extension)) return 'Spreadsheet';
    
    return extension.toUpperCase();
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
        <h1 className="text-3xl font-bold">File Uploads</h1>
        <p className="text-muted-foreground">
          All uploaded files from candidates and partners
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Files</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4">
                    No files found
                  </TableCell>
                </TableRow>
              ) : (
                files.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell className="flex items-center gap-2">
                      <FileIcon className="h-4 w-4" />
                      <span>{file.name}</span>
                    </TableCell>
                    <TableCell>{getFileType(file.name)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => openFile(file.name)}
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>View</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => downloadFile(file.name, file.name)}
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </Button>
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