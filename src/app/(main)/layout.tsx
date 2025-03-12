import React from "react";
import ClientLayout from "@/components/atoms/ClientLayout";

interface props {
  children: React.ReactNode;
}

export default function Layout({ children }: props) {
  return <div>{children}</div>;
}
