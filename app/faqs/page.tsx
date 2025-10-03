"use client";

import FaqList from "@/components/faq/FaqList";
import { FAQS, FAQ_CATEGORIES } from "@/components/faq/data";

export default function FaqsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-[#0B1215]">FAQs</h1>
      </div>

      <FaqList items={FAQS} categories={FAQ_CATEGORIES} />
    </div>
  );
}
