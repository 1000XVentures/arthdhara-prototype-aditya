"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className= "fixed top-0 left-0 right-0 z-50 mx-12 md:mx-24 mt-4" >
        <div className="flex items-center justify-between gap-4 rounded-xl border border-white/30 bg-green-100/80 px-4 py-3 backdrop-blur-lg" >
            <Link href="/" className = "shrink-0 rounded-full" >
                <Image
            src="/images/logo-golden.png"
    alt = "ArthDhara"
    width = { 40}
    height = { 40}
    className = "h-10 w-10"
        />
        </Link>

        < nav className = "hidden md:flex items-center justify-center gap-4" >
            <Link
            href="/profile/about"
    className = "px-3 py-1 rounded-lg text-black/90 hover:bg-white/10 border border-transparent hover:border-white/20 transition text-[18px] md:text-[20px]"
        >
        About
        </Link>
        < Link
    href = "/faqs"
    className = "px-3 py-1 rounded-lg text-black/90 hover:bg-white/10 border border-transparent hover:border-white/20 transition text-[18px] md:text-[20px]"
        >
        FAQ
        </Link>
        < Link
    href = "/hub"
    className = "px-3 py-1 rounded-lg text-black/90 hover:bg-white/10 border border-transparent hover:border-white/20 transition text-[18px] md:text-[20px]"
        >
        Blogs
        </Link>
        </nav>

        < div className = "flex items-center gap-3" >
            <Link
            href="/verify-eligibility"
    className = "whitespace-nowrap rounded-lg bg-[#d4af37] px-4 py-1.5 text-[18px] md:text-[20px] font-semibold text-black shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-[#c6a129] transition"
        >
        Check Eligibility
            </Link>
            < Link
    href = "/auth"
    className = "whitespace-nowrap rounded-lg bg-black px-4 py-1.5 text-[18px] md:text-[20px] font-semibold text-white hover:bg-gray-800 transition"
        >
        Login
        </Link>
        </div>
        </div>
        </div>
  );
}
