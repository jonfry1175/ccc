import About from "@/components/molecules/About";
import Certified from "@/components/molecules/Certified";
import Contact from "@/components/molecules/Contact";
import Crew from "@/components/molecules/Crew";
import Hero from "@/components/molecules/Hero";
import ImpactCard from "@/components/molecules/Impact";
import Partner from "@/components/molecules/Partner";
import Services from "@/components/molecules/Service";
import Testimonial from "@/components/molecules/Testimonial";
import TrainingCenter from "@/components/molecules/TrainingCenter";
import React from "react";

export default function Homepage() {
  return (
    <main className="">
      <Hero />
      <About />
      <Certified />
      <ImpactCard />
      <Crew />
      <TrainingCenter />
      <Services />
      <Partner />
      <Testimonial />
      <Contact />
    </main>
  );
}
