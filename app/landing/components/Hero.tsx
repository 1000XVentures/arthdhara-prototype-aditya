"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const words = ["Career", "Wedding", "Investment", "Startup", "Home", "Vacation"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.substring(0, currentText.length + 1));
                } else {
                    // Wait before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentText.substring(0, currentText.length - 1));
                } else {
                    // Move to next word
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, isDeleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [currentText, currentWordIndex, isDeleting, words]);

    return (
        <section
      className= "relative isolate bg-[#004225] mt-20"
    style = {{
        backgroundImage:
        "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 72px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 72px)",
      }
}
    >
    <div className="mx-auto w-full max-w-[1100px] px-5 pt-32 pb-20" >
        <h1 className="text-white font-extrabold leading-[1.06] tracking-tight text-[32px] sm:text-[40px] md:text-[48px]" >
            <span>Smart Credit against </span>
                < br />
                <span>
                Mutual Funds for your dream{ " "}
                    < span className = "text-[#d4af37] font-extrabold" >
                        { currentText }
                        < span className = "animate-pulse" >| </span>
                            </span>
                            </span>
                            </h1>

{/* Features */ }
<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white/95 text-[30px] sm:text-[33px]" >
    <div>
    <div className="font-semibold" > Starting @</div>
        < div className = "font-bold" > 9.99 % p.a.</div>
            </div>
            < div >
            <div className="font-semibold" > Up - to </div>
                < div className = "font-bold" >₹1 Crore </div>
                    </div>
                    < div >
                    <div className="font-semibold" > In just </div>
                        < div className = "font-bold" > 2 Hours </div>
                            </div>
                            < div >
                            <div className="font-semibold" > Interest </div>
                                < div className = "font-bold" > only EMI </div>
                                    </div>
                                    </div>

{/* Banner */ }
<div className="mt-10 flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 w-fit backdrop-blur" >
    <div className="text-2xl" >🎁</div>
        < div className = "text-white/90 text-[23px] sm:text-[27px] font-medium" >
            Get upto ₹5000 off on future travels
                </div>
                < div className = "text-xl" >✈️</div>
                    </div>

{/* CTA */ }
<div className="mt-8" >
    <Link
            href="/verify-eligibility"
className = "inline-block rounded-lg bg-[#d4af37] px-6 py-3 font-semibold text-[#1a1a1a] shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-[#c6a129] transition text-[27px]"
    >
    Check Eligibility In 10s
        </Link>
        </div>
        </div>

{/* Decorative wave */ }
<div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[120px]" >
    <svg
          viewBox="0 0 1200 120"
xmlns = "http://www.w3.org/2000/svg"
className = "w-full h-full"
preserveAspectRatio = "none"
    >
    <path
            d="M0,120 C300,20 900,20 1200,120 L1200,120 L0,120 Z"
fill = "rgba(255,255,255,0.35)"
    />
    </svg>
    </div>
    </section>
  );
}
