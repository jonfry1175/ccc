import About from "@/components/molecules/Homepage/About";
import Certified from "@/components/molecules/Homepage/Certified";
import Crew from "@/components/molecules/Homepage/Crew";
import ImpactCard from "@/components/molecules/Homepage/Impact";
import Partner from "@/components/molecules/Homepage/Partner";
import Testimonial from "@/components/molecules/Homepage/Testimonial";
import { Divider } from "@/components/ui/divider";
import React from "react";

export default function AboutPage() {
  return (
    <main>
      <About />
      <Divider className="h-1 bg-gold/30 my-4" />
      
      {/* Clients & Partners Section */}
      <section className="bg-navy-DEFAULT/5 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy-DEFAULT mb-12 relative inline-block mx-auto">
            <span className="relative z-10">Our Network</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gold opacity-30 z-0"></span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Partners */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <Partner />
            </div>
            
            {/* Testimonials */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      
      {/* Crew Showcase */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto">
          <Crew />
        </div>
      </section>
      
      {/* Certifications */}
      <Certified />
      
      {/* Impact */}
      <ImpactCard />
    </main>
  );
}