import { FaRegHandshake } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import SectionHeading from "@/components/atoms/SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="max-w-6xl px-10 mx-auto">
        <SectionHeading 
          title="About MSP"
          subtitle="Marina Prima Sukses (MPS) has been in the business of manpower deployment since 1993. At MPS, we take pride in being a dynamic force in the realm of manpower solutions, specializing in meeting the unique staffing needs of the hospitality industry."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Global Reach */}
          <div className="space-y-4 text-center border-2 rounded-md border-gold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 mt-8 h-16 mx-auto rounded-full bg-color1">
              <FaRegHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-color1">
              Our commitment
            </h3>
            <p className="text-color1 px-6 pb-8">
              We are committed to forging a strong partnership with you,
              leveraging our 31 years of industry experience and cutting-edge
              manpower solutions to deliver exceptional talent and foster mutual
              growth and success.
            </p>
          </div>

          {/* Industry Excellence */}
          <div className="space-y-4 text-center border-2 rounded-md border-gold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 mt-8 h-16 mx-auto rounded-full bg-color1">
              <FaRegEye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-color1">Our vision</h3>
            <p className="text-color1 px-6 pb-8">
              To be the premier partner for hospitality establishments seeking a
              reliable, skilled, and dedicated manpower that enhances their
              service delivery and guest satisfaction.
            </p>
          </div>

          {/* Expert Team */}
          <div className="space-y-4 text-center border-2 rounded-md border-gold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 mt-8 h-16 mx-auto rounded-full bg-color1">
              <GoGoal className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-color1">Our mission</h3>
            <p className="text-color1 px-6 pb-8">
              Our mission is to be the global partner of choice for hospitality
              businesses in need of a reliable and skilled manpower. By
              fostering cross-cultural collaboration and delivering tailor-made
              manpower solutions, we aim to contribute to the success of our
              clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
