"use client";

import Card from "@/components/ui/Card";
import Image from "next/image";

export default function ProfileTermsPage() {
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
                Terms of Service
              </h1>

              <div className="space-y-4 text-sm text-gray-700">
                <p>
                  By using this app, you agree to these Terms of Service. If you
                  do not agree, please discontinue use.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Use of the App
                  </h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      Provide accurate information and keep your account secure.
                    </li>
                    <li>Do not misuse the app or violate applicable laws.</li>
                    <li>We may modify or discontinue features at any time.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Eligibility and Compliance
                  </h4>
                  <p>
                    Certain features may require compliance checks and
                    documentation as mandated by law. Access may be limited if
                    requirements are not met.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Limitation of Liability
                  </h4>
                  <p>
                    To the maximum extent permitted by law, we are not liable
                    for indirect or consequential damages arising from your use
                    of the app.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Changes</h4>
                  <p>
                    We may update these Terms from time to time. Continued use
                    implies acceptance of the latest version.
                  </p>
                </div>
                <p className="text-xs text-gray-600">
                  This is a general template for demonstration. Refer to the
                  in-app legal documents for the most current and specific
                  terms.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
