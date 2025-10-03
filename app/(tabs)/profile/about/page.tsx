"use client";

import Card from "@/components/ui/Card";
import Image from "next/image";

export default function ProfileAboutPage() {
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
              <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                About Us
              </h1>

              <div className="space-y-4 text-center">
                <p className="text-gray-700 leading-relaxed">
                  Arthdhara is on a mission to make responsible credit and
                  wealth access simple, transparent, and inclusive for every
                  Indian. We combine intuitive design with strong compliance
                  practices to help you borrow smarter and grow your money with
                  confidence.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This app is an early prototype for demonstration and testing.
                  Product features, terms, and policies may evolve. For any
                  questions, please reach out from the Support section.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
