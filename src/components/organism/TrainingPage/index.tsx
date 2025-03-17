import CarouselComponent from "@/components/atoms/CarouselImage";
import Navbar from "@/components/atoms/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { trainings } from "@/lib/DataTraining";
import React from "react";

interface TrainingPageProps {
  onBackToHome?: () => void;
}

export default function TrainingPage({ onBackToHome }: TrainingPageProps) {
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
          <h1 className="text-3xl text-center font-bold">
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

      <section className="bg-color4 mt-4 mb-4 py-5 text-color1">
        <div className="max-w-6xl mx-auto space-y-4 px-4">
          <h1 className="text-3xl font-bold text-center">
            MPS Training Programs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ProgramsTraining.map((service, index) => (
              <Card
                key={index}
                className="space-y-4 text-center border-2 rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="px-6 pt-6 space-y-4 text-center">
                  <h2 className="text-xl font-semibold text-color1">
                    {service.title}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white mt-4 mb-4 py-5 text-color1">
        <div className="max-w-6xl mx-auto space-y-4 px-4">
          <h1 className="text-3xl text-center font-bold">
            Rising Stars of Our Program
          </h1>
          <CarouselComponent
            images={trainings.map((training) => ({
              src: training.image,
              alt: `Training ${training.id}`
            }))}
            loop={true}
            dragFree={true}
            slidesToScroll={1}
          />
        </div>
      </section>
    </div>
  );
}
