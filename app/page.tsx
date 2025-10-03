"use client";

import Navbar from "./landing/components/Navbar";
import Hero from "./landing/components/Hero";
import Partners from "./landing/components/Partners";
import Calculator from "./landing/components/Calculator";
import WhyLAMF from "./landing/components/WhyLAMF";
import Footer from "./landing/components/Footer";

export default function LandingPage() {
  return (
    <main className= "min-h-dvh bg-[#004225]" >
    <Navbar />
    < Hero />
    <Partners />
    < Calculator />
    <WhyLAMF />
    < Footer />
    </main>
  );
}
