export default function Services() {
  const UniqueValue = [
    {
      id: 1,
      value: "Fully Compliant with MLC 2006 Standards & ISO 9001:2015 Certified"
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
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="max-w-6xl px-10 mx-auto">
        <section className="bg-white py-5 text-color1">
          <div className="max-w-6xl mx-auto space-y-4 px-4">
            <h1 className="text-3xl  font-bold">
              Our Unique Value Proposition
            </h1>
            {UniqueValue.map((item) => (
              <li key={item.id} className="text-color1 max-w-2xl mx-auto mb-12">
                {item.value}
              </li>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
