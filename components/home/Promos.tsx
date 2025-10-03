import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Promos() {
  return (
    <section className="grid gap-3">
      <Link
        href="/calculator"
        className="group relative rounded-xl p-5 bg-white border border-green-200 hover:border-green-300 transition-all duration-300"
      >
        <div className="relative flex items-start gap-4">
          <div className="shrink-0 size-20 rounded-full grid place-items-center">
            <Image
              src="/images/icons/promos/calculator.png"
              alt="Calculator"
              width={40}
              height={40}
              className="size-10"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-900">
              LAMF Calculator
            </h3>
            <p className="text-xs text-black">
              Get instant estimates for your loan amount, EMIs, and eligibility
              based on your mutual funds
            </p>
          </div>
        </div>
        <ArrowRight className="absolute bottom-4 right-4 size-5 text-green-500" />
      </Link>
      <Link
        href="/hub"
        className="group relative rounded-xl p-5 bg-white border border-green-200 hover:border-green-300 transition-all duration-300"
      >
        <div className="relative flex items-start gap-4">
          <div className="shrink-0 size-24 rounded-full grid place-items-center">
            <Image
              src="/images/icons/promos/hub.png"
              alt="Knowledge Hub"
              width={48}
              height={48}
              className="size-12"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-900">
              LAMF Knowledge Hub
            </h3>
            <p className="text-xs text-black">
              Explore comprehensive guides, FAQs, and expert insights about Loan
              Against Mutual Funds
            </p>
          </div>
        </div>
        <ArrowRight className="absolute bottom-4 right-4 size-5 text-green-500" />
      </Link>
    </section>
  );
}
