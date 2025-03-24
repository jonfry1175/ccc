"use client";
import CarouselComponent from "@/components/atoms/CarouselImage";
import Navbar from "@/components/atoms/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { trainings } from "@/lib/DataTraining";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TrainingPageProps {
  onBackToHome?: () => void;
}

export default function TrainingPage({ onBackToHome }: TrainingPageProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const ProgramsTraining = [
    {
      id: 1,
      title:
        "Communication and Language course in the hospitality, deck & engine environment"
    },
    { id: 2, title: "Hospitality & Housekeeping Excellence Program" },
    { id: 3, title: "Bartending & Customer Services Training" },
    { id: 4, title: "Work and Safety Training" },
    { id: 5, title: "Profesional Spa & Massage Techniques" }
  ];

  return (
    <div>
      <Navbar onHomeClick={onBackToHome} />

      {/* <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="inline-block mb-12 text-3xl font-bold text-color1 md:text-4xl relative">
            Training Center
            <span className="absolute bottom-0 left-0 w-full h-3 bg-color1 opacity-30 z-0"></span>
          </h1>
        </div>
      </section> */}

      <section className="bg-white py-5 text-color1">
        <div className="max-w-6xl mx-auto space-y-4 px-4">
          <h1 className="text-4xl text-center font-bold mb-8">
            MPS Training Division
          </h1>
          <p>
            MPS Training Division is part of our strategic subsidiary unit of
            PT. Marina Prima Sukses. Our company takes great pride in our
            state-of-the-art training facility, designed to elevate the skills,
            performance, and knowledge of our candidate. Nestled within our
            premises, this facility serves as a dynamic hub where our manpower
            immerse themselves in hands-on learning experiences.
          </p>
          <p>
            From advanced service techniques to cutting-edge hospitality trends,
            our comprehensive training programs cover every aspect of the
            industry. Equipped with modern technology and led by industry
            experts, our courses are tailored to enhance both individual
            capabilities and team cohesion. By investing in continuous education
            and practical training, we empower our manpower to deliver
            exceptional service and stay ahead in the competitive hospitality
            landscape.
          </p>
        </div>
      </section>

      <section
        className="bg-color4 mt-4 mb-4 py-8 text-color1"
        ref={sectionRef}
      >
        <div className="max-w-6xl mx-auto space-y-4 px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Our Top 5 Training Courses
          </motion.h1>
          <ul className="list-decimal list-inside">
            {ProgramsTraining.map((service, index) => (
              <motion.li
                key={index}
                className="text-[16px] font-semibold text-color1 p-4"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {service.title}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white mt-4 mb-4 py-5 text-color1">
        <div className="max-w-6xl mx-auto space-y-4 px-4">
          <h1 className="text-4xl text-center font-bold">
            Rising Stars of Our Program
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <video
              src="/images/training/11.mp4"
              controls
              className="w-full h-[150px] md:h-[400px] object-cover rounded-lg"
            ></video>
            <video
              src="/images/training/12.mp4"
              controls
              className="w-full h-[150px] md:h-[400px] object-cover rounded-lg"
            ></video>
            <CarouselComponent
              images={trainings.map((training) => ({
                src: training.image,
                alt: `Training ${training.id}`
              }))}
              loop={false}
              dragFree={true}
              slidesToScroll={1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
