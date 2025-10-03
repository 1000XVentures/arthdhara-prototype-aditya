"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className= "bg-[#004225] text-white py-12" >
        <div className="mx-auto w-full max-w-[1100px] px-5" >
            {/* Top Section */ }
            < div className = "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" >
                {/* Left: Logo and Social Media */ }
                < div className = "md:col-span-1" >
                    {/* Logo */ }
                    < div className = "mb-6" >
                        <div className="relative w-16 h-16 mb-4" >
                            <Image
                  src="/images/logo-golden.png"
    alt = "ArthDhara"
    width = { 64}
    height = { 64}
    className = "w-16 h-16"
        />
        </div>
        < div className = "text-[42px] font-bold text-[#d4af37]" > ArthDhara </div>
            </div>

    {/* Social Media Icons */ }
    <div className="flex gap-4" >
        {/* Instagram */ }
        < div className = "w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition cursor-pointer" >
            <div className="w-4 h-4 bg-white rounded-sm relative" >
                <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-white rounded-full" > </div>
                    < div className = "absolute top-1 right-0.5 w-1 h-1 bg-white rounded-full" > </div>
                        </div>
                        </div>

    {/* LinkedIn */ }
    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition cursor-pointer" >
        <div className="w-4 h-4 text-white text-[24px] font-bold flex items-center justify-center" >in </div>
            </div>

    {/* X (Twitter) */ }
    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition cursor-pointer" >
        <div className="w-4 h-4 text-white text-[24px] font-bold flex items-center justify-center" > X </div>
            </div>
            </div>
            </div>

    {/* Navigation Columns */ }
    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8" >
        {/* ArthDhara Column */ }
        < div >
        <h3 className="font-bold text-white mb-4 text-[28px]" > ArthDhara </h3>
            < ul className = "space-y-2" >
                <li>
                <Link href="/how-it-works" className = "text-white/80 hover:text-white transition text-[28px]" >
                    How ArthDhara works
                        </Link>
                        </li>
                        < li >
                        <Link href="/why-arthdhara" className = "text-white/80 hover:text-white transition text-[28px]" >
                            Why ArthDhara
                                </Link>
                                </li>
                                < li >
                                <Link href="/profile/mission" className = "text-white/80 hover:text-white transition text-[28px]" >
                                    Our mission
                                        </Link>
                                        </li>
                                        < li >
                                        <Link href="/faqs" className = "text-white/80 hover:text-white transition text-[28px]" >
                                            FAQ
                                            </Link>
                                            </li>
                                            </ul>
                                            </div>

    {/* Explore Column */ }
    <div>
        <h3 className="font-bold text-white mb-4 text-[28px]" > Explore </h3>
            < ul className = "space-y-2" >
                <li>
                <Link href="/profile/about" className = "text-white/80 hover:text-white transition text-[28px]" >
                    About Us
                        </Link>
                        </li>
                        < li >
                        <Link href="/calculator" className = "text-white/80 hover:text-white transition text-[28px]" >
                            Tools
                            </Link>
                            </li>
                            < li >
                            <Link href="/contact/form" className = "text-white/80 hover:text-white transition text-[28px]" >
                                Partner with Us
                                </Link>
                                </li>
                                < li >
                                <Link href= "/contact" className = "text-white/80 hover:text-white transition text-[28px]" >
                                    Contact us
                                        </Link>
                                        </li>
                                        < li >
                                        <Link href="/hub" className = "text-white/80 hover:text-white transition text-[28px]" >
                                            Blogs
                                            </Link>
                                            </li>
                                            </ul>
                                            </div>

    {/* Important Links Column */ }
    <div>
        <h3 className="font-bold text-white mb-4 text-[28px]" > Important Links </h3>
            < ul className = "space-y-2" >
                <li>
                <Link href="/profile/terms" className = "text-white/80 hover:text-white transition text-[28px]" >
                    Terms & Conditions
                    </Link>
                    </li>
                    < li >
                    <Link href="/profile/privacy" className = "text-white/80 hover:text-white transition text-[28px]" >
                        Privacy policy
                            </Link>
                            </li>
                            < li >
                            <Link href="/profile/support" className = "text-white/80 hover:text-white transition text-[28px]" >
                                Communications
                                </Link>
                                </li>
                                < li >
                                <Link href="/partners" className = "text-white/80 hover:text-white transition text-[28px]" >
                                    Lending Partners
                                        </Link>
                                        </li>
                                        < li >
                                        <Link href="https://www.rbi.org.in/Scripts/BS_ViewMasLocator.aspx" target = "_blank" className = "text-white/80 hover:text-white transition text-[28px]" >
                                            RBI Sachet Portal
                                                </Link>
                                                </li>
                                                </ul>
                                                </div>
                                                </div>
                                                </div>

    {/* Separator Line */ }
    <div className="border-t border-white/20 mb-6" > </div>

    {/* Bottom Section */ }
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[28px] text-white/80" >
        <div>
            © 2025 ArthDhara Ventures Private Limited.All rights reserved.
          </div>
        <div>
    CIN: U62099MH2024PTC435972
        </div>
        </div>
        </div>
        </footer>
  );
}
