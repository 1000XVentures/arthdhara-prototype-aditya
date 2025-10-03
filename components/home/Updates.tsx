import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Updates() {
  return (
    <section className="rounded-xl p-3 bg-[#1e4d4a]">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-white">
          Updates & Highlights
        </h3>
      </div>
      <ul className="space-y-3">
        <li>
          <Link
            href="/hub/articles"
            className="group flex items-center gap-3 rounded-lg p-2 hover:bg-[#2a5d5a] transition-colors"
          >
            <div className="size-2 rounded-full bg-[#c29329]"></div>
            <div>
              <span className="text-xs font-medium text-[#c29329] bg-[#FDF8F3] px-2 py-0.5 rounded-full">
                Article
              </span>
              <h4 className="text-base font-semibold text-white mt-1">
                LAMF Basics Guide
              </h4>
              <p className="text-xs text-gray-400">
                Complete walkthrough for beginners
              </p>
            </div>
            <ArrowRight className="size-6 text-[#c29329] ml-auto group-hover:translate-x-1 transition-transform" />
          </Link>
        </li>
        <li>
          <Link
            href="/faqs"
            className="group flex items-center gap-3 rounded-lg p-2 hover:bg-[#2a5d5a] transition-colors"
          >
            <div className="size-2 rounded-full bg-[#c29329]"></div>
            <div>
              <span className="text-xs font-medium text-[#c29329] bg-[#FDF8F3] px-2 py-0.5 rounded-full">
                FAQ
              </span>
              <h4 className="text-base font-semibold text-white mt-1">
                Eligibility Criteria
              </h4>
              <p className="text-xs text-gray-400">
                Updated requirements and process
              </p>
            </div>
            <ArrowRight className="size-6 text-[#c29329] ml-auto group-hover:translate-x-1 transition-transform" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
