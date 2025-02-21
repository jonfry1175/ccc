import { FaRegHandshake } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
export default function About() {
  return (
    <section className="px-4 py-16 md:py-24 ">
      <div className="container max-w-6xl mx-auto ">
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-3xl font-bold text-bgcolor1 md:text-4xl">
            About MSP
          </h1>
          <p className="max-w-6xl mx-auto text-lg text-color1">
            Marina Prima Sukses (MPS) has been in the business of manpower
            deployment since 1993. At MPS, we take pride in being a dynamic
            force in the realm of manpower solutions, specializing in meeting
            the unique staffing needs of the hospitality industry. Since our
            establishment, we have been at the forefront of providing tailored,
            reliable, and skilled manpower to elevate the service standards of
            our clients in the hospitality sector. We have been working with
            several big names in the industry, such as an Italian company called
            MSC Cruise, which we serve needed manpower to join onboard and some
            notable hotels around. With our experience over the years of serving
            professional manpower who are dedicated to their works and give in
            their best, we stand as the right channel to give you that
            satisfying personnel you desire for the growth of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Global Reach */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-color1">
              {/* <Globe2 /> */}
              <FaRegHandshake className="w-8 h-8 text-textColor" />
            </div>
            <h3 className="text-xl font-semibold text-color1">
              Our commitment
            </h3>
            <p className="text-color1">
              We are committed to forging a strong partnership with you,
              leveraging our 31 years of industry experience and cutting-edge
              manpower solutions to deliver exceptional talent and foster mutual
              growth and success.
            </p>
          </div>

          {/* Industry Excellence */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-color1">
              <FaRegEye className="w-8 h-8 text-textColor" />
            </div>
            <h3 className="text-xl font-semibold text-color1">Our vision</h3>
            <p className="text-color1">
              To be the premier partner for hospitality establishments seeking a
              reliable, skilled, and dedicated manpower that enhances their
              service delivery and guest satisfaction.
            </p>
          </div>

          {/* Expert Team */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-color1">
              <GoGoal className="w-8 h-8 text-textColor" />
            </div>
            <h1 className="text-xl font-semibold text-color1">Our mission</h1>
            <p className="text-color1">
              Our mission is to be the global partner of choice for hospitality
              businesses in need of a reliable and skilled manpower. By
              fostering cross-cultural collaboration and delivering tailor-made
              manpower solutions, we aim to contribute to the success of our
              clients worldwide. At the heart of our mission is a commitment to
              excellence, integrity, and building lasting partnerships within
              the ever-evolving hospitality landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
