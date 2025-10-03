import Image from "next/image";

const PARTNERS = [
  { name: "NSDL", logo: "/images/Partners-n/nsdl_border.svg" },
  { name: "CAMS", logo: "/images/Partners-n/cams_border.svg" },
  { name: "CDSL", logo: "/images/Partners-n/cdsl.svg" },
  { name: "DigiLocker", logo: "/images/Partners-n/digilocker_border.svg" },
];

export default function Partners() {
  return (
    <section className="space-y-3 mb-12">
      <h3 className="text-lg font-semibold text-gray-700">
        Our Trusted Partners
      </h3>
      <div className="relative overflow-hidden px-4 marquee-gradient-mask">
        <div
          className="marquee-track animate-marquee-medium md:animate-marquee-slow hover:[animation-play-state:paused]"
          aria-label="Partner logos continuous scroll"
        >
          {/* Track A */}
          {PARTNERS.map((partner) => (
            <div key={`trackA-${partner.name}`} className="mx-2 inline-block">
              <div className="group relative rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                <div className="relative w-[220px] h-[100px]">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="220px"
                  />
                </div>
              </div>
            </div>
          ))}
          {/* Track B (duplicate) */}
          {PARTNERS.map((partner) => (
            <div
              key={`trackB-${partner.name}`}
              className="mx-2 inline-block"
              aria-hidden
            >
              <div className="group relative rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                <div className="relative w-[220px] h-[100px]">
                  <Image
                    src={partner.logo}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="220px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
