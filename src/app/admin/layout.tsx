"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Database, Folder, Home, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
      setIsLoading(false);
    }

    checkAuth();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isLoggedIn && pathname !== "/admin/login") {
    router.push("/admin/login");
    return null;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">MPS Admin</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/dashboard"
                className={`flex items-center p-2 rounded-md ${
                  pathname === "/admin/dashboard"
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Home className="mr-2 h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/candidates"
                className={`flex items-center p-2 rounded-md ${
                  pathname === "/admin/candidates"
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <User className="mr-2 h-5 w-5" />
                Candidates
              </Link>
            </li>
            <li>
              <Link
                href="/admin/partners"
                className={`flex items-center p-2 rounded-md ${
                  pathname === "/admin/partners"
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Database className="mr-2 h-5 w-5" />
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/admin/uploads"
                className={`flex items-center p-2 rounded-md ${
                  pathname === "/admin/uploads"
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Folder className="mr-2 h-5 w-5" />
                Uploads
              </Link>
            </li>
          </ul>
          <div className="pt-4 mt-4 border-t">
            <Button
              variant="outline"
              className="flex w-full items-center justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
} 