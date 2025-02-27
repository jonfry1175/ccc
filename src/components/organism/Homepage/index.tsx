import About from "@/components/molecules/Homepage/About";
import ArticlePage from "@/components/molecules/Homepage/Article";
import Certified from "@/components/molecules/Homepage/Certified";
import Contact from "@/components/molecules/Homepage/Contact";
import Crew from "@/components/molecules/Homepage/Crew";
import Hero from "@/components/molecules/Homepage/Hero";
import ImpactCard from "@/components/molecules/Homepage/Impact";
import Partner from "@/components/molecules/Homepage/Partner";
import Services from "@/components/molecules/Homepage/Service";
import Testimonial from "@/components/molecules/Homepage/Testimonial";
import TrainingCenter from "@/components/molecules/Homepage/TrainingCenter";
import WhatWeDo from "@/components/molecules/Homepage/WhatWeDo";
import React from "react";

export default function Homepage() {
  return (
    <main className="">
      <Hero />
      <About />
      <Certified />
      <ImpactCard />
      <WhatWeDo />
      <Partner />
      <Crew />
      <TrainingCenter />
      <Services />
      <Testimonial />
      <ArticlePage />
      <Contact />
    </main>
  );
}
