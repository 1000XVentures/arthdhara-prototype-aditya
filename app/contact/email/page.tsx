"use client";

import { Mail } from "lucide-react";
import Card from "@/components/ui/Card";

export default function EmailSupportPage() {
  const handleEmailClick = (email: string, subject?: string) => {
    const encodedSubject = subject ? encodeURIComponent(subject) : "";
    const mailtoLink = subject
      ? `mailto:${email}?subject=${encodedSubject}`
      : `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Email Options */}
      <div className="px-6 py-6">
        <div className="mb-6">
          <p className="text-gray-600 text-center leading-relaxed">
            Send us an email and we&apos;ll get back to you within 24 hours.
            Choose the appropriate support channel below.
          </p>
        </div>

        <div className="space-y-4">
          {/* General Support Email */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  General Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  For account inquiries, loan applications, and general
                  questions
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="font-mono text-sm text-gray-900">
                    support@arthdhara.com
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleEmailClick(
                      "support@arthdhara.com",
                      "General Support Inquiry"
                    )
                  }
                  className="w-full bg-green-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-900 transition-colors"
                >
                  Open Email App
                </button>
              </div>
            </div>
          </Card>

          {/* Technical Support Email */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Technical Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  For app issues, login problems, and technical difficulties
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="font-mono text-sm text-gray-900">
                    tech@arthdhara.com
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleEmailClick(
                      "tech@arthdhara.com",
                      "Technical Support Request"
                    )
                  }
                  className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-900 transition-colors"
                >
                  Open Email App
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Response Time Info */}
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-green-600 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-medium text-green-900 mb-1">Response Time</h4>
              <p className="text-green-800 text-sm">
                We typically respond to emails within 24 hours during business
                days. For urgent matters, please call our support line.
              </p>
            </div>
          </div>
        </div>

        {/* Copy Email Button */}
        <div className="mt-6">
          <button
            onClick={() => {
              const emails = "support@arthdhara.com, tech@arthdhara.com";
              navigator.clipboard.writeText(emails).then(() => {
                alert("Email addresses copied to clipboard!");
              });
            }}
            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Copy All Email Addresses
          </button>
        </div>
      </div>
    </div>
  );
}
