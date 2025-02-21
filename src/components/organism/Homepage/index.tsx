import About from "@/components/molecules/About";
import Contact from "@/components/molecules/Contact";
import Crew from "@/components/molecules/Crew";
import Hero from "@/components/molecules/Hero";
import Partner from "@/components/molecules/Partner";
import Services from "@/components/molecules/Service";
import Testimonial from "@/components/molecules/Testimonial";
import TrainingCenter from "@/components/molecules/TrainingCenter";
import React from "react";

export default function Homepage() {
  return (
    <main className="">
      <section className="">
        <Hero />
        <About />
        <Crew />
        <TrainingCenter />
        <Services />
        <Partner />
        <Testimonial />
        <Contact />
      </section>
    </main>
  );
}
