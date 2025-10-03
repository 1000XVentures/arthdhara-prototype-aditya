"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Calculator from "./components/Calculator";
import WhyLAMF from "./components/WhyLAMF";
import Footer from "./components/Footer";

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
