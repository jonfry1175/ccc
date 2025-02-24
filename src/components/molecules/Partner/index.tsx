import { partners } from "@/lib/DataPartner";
import Image from "next/image";

export default function Partner() {
  return (
    <section className="px-4 py-16 bg-white md:py-24">
      <div className="container max-w-6xl mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-color1 md:text-4xl">
          Our Partner
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {partners.map((partner, index) => (
            <div key={index}>
              <Image
                src={partner.image}
                alt="Partner"
                width={400}
                height={40}
                className="mx-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
