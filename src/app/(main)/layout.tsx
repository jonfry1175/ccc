import Footer from "@/components/atoms/Footer";
import Navbar from "@/components/atoms/Navbar";
import React from "react";

interface props {
  children: React.ReactNode;
}

export default function layout({ children }: props) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mx-auto ">{children}</div>
      <Footer />
    </div>
  );
}
