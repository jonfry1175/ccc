import { FaRegHandshake } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

export default function About() {
  return (
    <section id="about" className="px-4 py-16 md:py-28 bg-white relative">
      {/* Visual divider at the top of the section */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20"></div>

      <div className="max-w-6xl px-6 md:px-10 mx-auto">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-gold uppercase tracking-wider font-medium mb-1">Our Company</h2>
          <h1 className="text-3xl font-bold text-navy-DEFAULT md:text-5xl mb-6 relative inline-block">
            About <span className="text-gold">MSP</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
          </h1>
          <p className="max-w-4xl mx-auto text-navy-DEFAULT text-[16px] leading-relaxed mt-8">
            Marina Prima Sukses (MPS) has been in the business of manpower
            deployment since 1993. At MPS, we take pride in being a dynamic
            force in the realm of manpower solutions, specializing in meeting
            the unique staffing needs of the hospitality industry. Since our
            establishment, we have been at the forefront of providing tailored,
            reliable, and skilled manpower to elevate the service standards of
            our clients in the hospitality sector.
          </p>
          <p className="max-w-4xl mx-auto text-navy-DEFAULT text-[16px] leading-relaxed">
            We have been working with
            several big names in the industry, such as an Italian company called
            MSC Cruise, which we serve needed manpower to join onboard and some
            notable hotels around. With our experience over the years of serving
            professional manpower who are dedicated to their works and give in
            their best, we stand as the right channel to give you that
            satisfying personnel you desire for the growth of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Commitment */}
          <div className="space-y-5 text-center p-8 rounded-lg bg-elegant-beige/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-navy-DEFAULT shadow-md group-hover:bg-gold transition-colors duration-300">
              <FaRegHandshake className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy-DEFAULT">
              Our <span className="text-gold">commitment</span>
            </h3>
            <p className="text-navy-DEFAULT text-[15px] leading-relaxed">
              We are committed to forging a strong partnership with you,
              leveraging our 31 years of industry experience and cutting-edge
              manpower solutions to deliver exceptional talent and foster mutual
              growth and success.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-5 text-center p-8 rounded-lg bg-elegant-beige/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-navy-DEFAULT shadow-md group-hover:bg-gold transition-colors duration-300">
              <FaRegEye className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy-DEFAULT">
              Our <span className="text-gold">vision</span>
            </h3>
            <p className="text-navy-DEFAULT text-[15px] leading-relaxed">
              To be the premier partner for hospitality establishments seeking a
              reliable, skilled, and dedicated manpower that enhances their
              service delivery and guest satisfaction.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-5 text-center p-8 rounded-lg bg-elegant-beige/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-navy-DEFAULT shadow-md group-hover:bg-gold transition-colors duration-300">
              <GoGoal className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy-DEFAULT">
              Our <span className="text-gold">mission</span>
            </h3>
            <p className="text-navy-DEFAULT text-[15px] leading-relaxed">
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
