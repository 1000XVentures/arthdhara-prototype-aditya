"use client";

import Image from "next/image";

export default function WhyLAMF() {
    return (
        <section className= "bg-[#0a5031] py-16" >
        <div className="mx-auto w-full max-w-[1100px] px-5" >
            <h2 className="text-center text-[50px] sm:text-[67px] font-bold text-white mb-12" >
                Why take a credit against your mutual funds ?
                    </h2>

                    < div className = "bg-white rounded-xl p-8 md:p-12 shadow-lg" >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >
                            {/* Left: Illustration */ }
                            < div className = "relative flex justify-center lg:justify-start" >
                                <div className="relative w-80 h-80" >
                                    {/* Background organic shape */ }
                                    < div className = "absolute inset-0 bg-[#f7f3ef] rounded-full transform scale-105 blur-xl opacity-70" > </div>
                                        < div className = "absolute inset-0 bg-[#f7f3ef] rounded-full transform scale-110 blur-lg opacity-50" > </div>

    {/* Main illustration */ }
    <div className="relative w-full h-full flex items-center justify-center" >
        {/* Money bag */ }
        < div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#d4af37] rounded-full flex items-center justify-center shadow-xl" >
            <span className="text-white text-5xl font-bold" >₹</span>
                </div>

    {/* Hand */ }
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#c6a129] rounded-full flex items-center justify-center shadow-lg transform rotate-12" >
        <span className="text-white text-4xl" >✋</span>
            </div>

    {/* Falling coins */ }
    <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce-slow delay-100" > </div>
        < div className = "absolute top-1/3 right-1/4 w-5 h-5 bg-yellow-300 rounded-full animate-bounce-slow delay-200" > </div>
            < div className = "absolute bottom-1/4 left-1/3 w-7 h-7 bg-yellow-500 rounded-full animate-bounce-slow delay-300" > </div>
                </div>
                </div>
                </div>

    {/* Right: Benefits */ }
    <div className="space-y-6 text-[#1a1a1a]" >
        <div>
        <h3 className="text-2xl font-semibold text-[#d4af37]" >
            Don & apos;t sell your Mutual Funds
                </h3>
                < p className = "mt-2 text-lg" >
                    Get instant credit against your existing mutual fund investments
                  without liquidating them.Continue to benefit from market growth.
                </p>
        </div>
        < div >
        <h3 className="text-2xl font-semibold text-[#d4af37]" >
            Lower Interest Rates
                </h3>
                < p className = "mt-2 text-lg" >
                    Enjoy significantly lower interest rates starting at 9.99 % p.a.
                  compared to personal loans or credit cards.
                </p>
        </div>
        < div >
        <h3 className="text-2xl font-semibold text-[#d4af37]" >
            Flexible Repayment
                </h3>
                < p className = "mt-2 text-lg" >
                    Pay interest only EMIs and repay the principal when you are ready.
                  No fixed tenure obligations.
                </p>
        </div>
        < div >
        <h3 className="text-2xl font-semibold text-[#d4af37]" >
            Quick & Easy Process
                </h3>
                < p className = "mt-2 text-lg" >
                    Apply online in minutes and get funds disbursed to your account in
                        as little as 2 hours.
                </p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </section>
  );
}