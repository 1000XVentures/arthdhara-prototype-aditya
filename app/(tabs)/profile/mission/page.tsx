"use client";

import Card from "@/components/ui/Card";
import Image from "next/image";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB]">
      <div className="px-4 py-6">
        <div className="space-y-6">
          <Card className="bg-white">
            <div className="p-6">
              <div className="w-full flex items-center justify-center mb-6">
                <Image
                  src="/images/logo-golden.png"
                  alt="Arthdhara Logo"
                  width={72}
                  height={72}
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Our Mission
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    To democratize access to financial services by providing
                    innovative, transparent, and user-friendly solutions that
                    empower individuals to unlock the value of their assets and
                    achieve their financial goals.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Our Vision
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    To become India&apos;s most trusted financial platform that
                    transforms how people think about and manage their wealth,
                    making sophisticated financial products accessible to
                    everyone, regardless of their financial background or
                    expertise.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Our Values
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Transparency:</strong> We believe in clear,
                        honest communication and complete transparency in all
                        our financial products and services.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Innovation:</strong> We continuously innovate to
                        provide cutting-edge financial solutions that meet the
                        evolving needs of our customers.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Accessibility:</strong> We make financial
                        services accessible to everyone, breaking down barriers
                        and simplifying complex financial concepts.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Trust:</strong> We build lasting relationships
                        based on trust, integrity, and reliability in everything
                        we do.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    What We Do
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Arthdhara specializes in Loan Against Mutual Funds (LAMF),
                    providing individuals with a smart way to access liquidity
                    without liquidating their investments. We help you unlock
                    the value of your mutual fund portfolio while keeping your
                    long-term investment strategy intact.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
