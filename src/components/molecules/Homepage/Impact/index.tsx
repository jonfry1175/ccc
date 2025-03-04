import { NumberTicker } from "@/components/ui/number-ticker";

export default function ImpactCard() {
  return (
    <section id="about" className="px-4 py-16 md:py-24 ">
      <div className="max-w-6xl px-10 mx-auto text-center">
        <h1 className="inline-block text-3xl font-bold text-color1 md:text-4xl relative">
          Our Impact
          <span className="absolute bottom-0 left-0 w-full h-3 bg-color1 opacity-30 z-0"></span>
        </h1>

        <div className="max-w-full  md:w-full mx-4 md:mx-auto">
          <div className="bg-gold mt-8 text-color1 rounded-lg">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              {/* 9000+ */}
              <div
                style={{
                  textAlign: "center",
                  flex: "1 1 200px",
                  margin: "1rem"
                }}
              >
                <h4 className="text-color1 text-[36px] sm:text-[24px]  md:text-[50px] lg:text-[50px] font-bold text-center relative mb-2">
                  <NumberTicker value={9000} delay={-1000000} direction="up" />+
                </h4>
                <p className=" text-[16px] sm:text-[14px] lg:text-[24px]">
                  Deployed Abroad
                </p>
              </div>

              {/* 4+ */}
              <div
                style={{
                  textAlign: "center",
                  flex: "1 1 200px",
                  margin: "1rem"
                }}
              >
                <h4 className="text-impact text-[36px] sm:text-[24px]  md:text-[50px] lg:text-[50px] font-bold text-center relative mb-2">
                  <NumberTicker value={4} />+
                </h4>
                <p className=" text-[16px] sm:text-[14px] lg:text-[24px]">
                  Big Clients
                </p>
              </div>

              {/* 30 Years */}
              <div
                style={{
                  textAlign: "center",
                  flex: "1 1 200px",
                  margin: "1rem"
                }}
              >
                <h4 className="text-impact text-[36px] sm:text-[24px]  md:text-[50px] lg:text-[50px] font-bold text-center relative mb-2">
                  <NumberTicker value={32} />
                  Years
                </h4>
                <p className=" text-[16px] sm:text-[14px] lg:text-[24px]">
                  of Operations in Indonesia
                </p>
              </div>

              {/* 90% */}
              <div
                style={{
                  textAlign: "center",
                  flex: "1 1 200px",
                  margin: "1rem"
                }}
              >
                <h4 className="text-impact text-[36px] sm:text-[24px]  md:text-[50px] lg:text-[50px] font-bold text-center relative mb-2">
                  <NumberTicker value={90} />%
                </h4>
                <p className=" text-[16px] sm:text-[14px] lg:text-[24px]">
                  Successful Placement Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
