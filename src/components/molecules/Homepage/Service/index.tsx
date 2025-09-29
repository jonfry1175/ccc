import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const UniqueValue = [
    {
      id: 1,
      value:
        "Fully Compliant with MLC 2006 Standards & ISO 9001:2015 Certified."
    },
    {
      id: 2,
      value:
        "Our recruitment team & office staff are composed of experienced former seafarers with extensive expertise in both the cruise line and hospitality industries."
    },
    {
      id: 3,
      value:
        "We uphold the highest ethical standards, ensuring that no application or processing fees are charged beyond those mandated by our principals."
    },
    {
      id: 4,
      value:
        "Every cruise line client is assigned a dedicated crew coordinator, supported by a specialized processing and scheduling team for seamless operations."
    },
    {
      id: 5,
      value:
        "We have forged strong partnerships with top hospitality institutions across Indonesia, which giving us priority access to exceptional graduates/candidates."
    }
  ];

  return (
    <section id="about" className="px-4 py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-6xl px-10 mx-auto">
        <section className="bg-white py-5 text-primaryRed">
          <div className="max-w-6xl mx-auto space-y-4 px-4">
            <motion.h1
              className="text-3xl font-bold mb-20"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              Our Unique Value Proposition
            </motion.h1>
            <div className="text-left w-full">
              <ul className="space-y-4 list-disc pl-5 w-full">
                {UniqueValue.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="text-primaryRed w-full text-left ml-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
