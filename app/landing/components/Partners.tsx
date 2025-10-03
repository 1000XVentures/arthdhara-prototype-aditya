import Image from "next/image";

export default function Partners() {
    return (
        <section className= "bg-[#0a5031] text-white py-10" >
        <div className="mx-auto w-full max-w-[1100px] px-5" >
            <p className="text-[20px] tracking-widest text-[#d4af37] text-center mb-2" >
                OUR PARTNERS
                    </p>
                    < h2 className = "text-[40px] sm:text-[50px] font-semibold text-center mb-6" >
                        We work with the best
                            </h2>

    {/* Marquee container */ }
    <div className="relative overflow-hidden marquee-gradient-mask py-2" >
        <div className="marquee-track animate-marquee-medium" >
            {/* One loop of logos */ }
            < Image
    src = "/images/Partners-n/kfintech.svg"
    alt = "KFINTECH"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <Image
              src="/images/Partners-n/digilocker_border.svg"
    alt = "DigiLocker"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <Image
              src="/images/Partners-n/cdsl.svg"
    alt = "CDSL"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <Image
              src="/images/Partners-n/nsdl_border.svg"
    alt = "NSDL"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <span className="h-17 md:h-20 opacity-70 flex items-center text-[30px] font-semibold text-[#d4af37] mx-8 flex-shrink-0" >
            Bajaj Finance
                </span>
    {/* Duplicate for seamless scroll */ }
    <Image
              src="/images/Partners-n/kfintech.svg"
    alt = "KFINTECH"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <Image
              src="/images/Partners-n/digilocker_border.svg"
    alt = "DigiLocker"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <Image
              src="/images/Partners-n/cdsl.svg"
    alt = "CDSL"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <Image
              src="/images/Partners-n/nsdl_border.svg"
    alt = "NSDL"
    className = "h-10 md:h-12 opacity-70 mx-8 flex-shrink-0"
    width = { 112}
    height = { 40}
        />
        <span className="h-17 md:h-20 opacity-70 flex items-center text-[30px] font-semibold text-[#d4af37] mx-8 flex-shrink-0" >
            Bajaj Finance
                </span>
                </div>
                </div>
                </div>
                </section>
  );
}
