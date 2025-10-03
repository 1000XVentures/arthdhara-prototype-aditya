"use client";

import { Phone } from "lucide-react";
import Card from "@/components/ui/Card";

export default function CallNowPage() {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Call Options */}
      <div className="px-6 py-6">
        <div className="mb-6">
          <p className="text-gray-600 text-center leading-relaxed">
            Need immediate assistance? Call our support team directly using one
            of the options below.
          </p>
        </div>

        <div className="space-y-4">
          {/* Primary Support Number */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  General Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  For general inquiries and account support
                </p>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  +91 9993508760
                </p>
                <button
                  onClick={() => handleCall("+919993508760")}
                  className="w-full bg-green-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-900 transition-colors"
                >
                  Call Now
                </button>
              </div>
            </div>
          </Card>

          {/* Technical Support Number */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Technical Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  For technical issues and app-related problems
                </p>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  +91 9876543210
                </p>
                <button
                  onClick={() => handleCall("+919876543210")}
                  className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-900 transition-colors"
                >
                  Call Now
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-blue-600 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Support Hours</h4>
              <p className="text-blue-800 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM IST
                <br />
                Saturday: 10:00 AM - 4:00 PM IST
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
