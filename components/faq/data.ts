export type FaqCategory =
  | "Getting Started"
  | "Eligibility"
  | "Process"
  | "Repayment"
  | "Security"
  | "Troubleshooting";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
};

export const FAQ_CATEGORIES: readonly FaqCategory[] = [
  "Getting Started",
  "Eligibility",
  "Process",
  "Repayment",
  "Security",
  "Troubleshooting",
] as const;

export const FAQS: FaqItem[] = [
  {
    id: "faq-what-is-lamf",
    question: "What is loan against mutual funds (LAMF)?",
    answer:
      "LAMF is a secured loan where your mutual fund units are pledged as collateral so you can access liquidity without redeeming your investments.",
    category: "Getting Started",
  },
  {
    id: "faq-benefits",
    question: "What are the benefits of taking LAMF?",
    answer:
      "Typically lower interest than unsecured loans, quick processing, and you continue to participate in market movements without selling your units.",
    category: "Getting Started",
  },
  {
    id: "faq-eligibility-criteria",
    question: "What is the eligibility criteria?",
    answer:
      "You should be 18–65, have KYC-compliant mutual fund holdings, and meet lender-specific portfolio value and risk checks. A good credit score helps.",
    category: "Eligibility",
  },
  {
    id: "faq-how-to-apply",
    question: "How do I apply?",
    answer:
      "Complete KYC, select funds to pledge, choose amount and tenure, upload documents, and submit. Approval and disbursement can be near-instant with eligible portfolios.",
    category: "Process",
  },
  {
    id: "faq-pledge-security",
    question: "Is pledging my mutual funds safe?",
    answer:
      "Pledging is handled through approved depositories, and units remain in your name. The lender has a lien to manage risk; you continue to earn returns.",
    category: "Security",
  },
  {
    id: "faq-missed-payment",
    question: "What happens if I miss a payment?",
    answer:
      "You may incur late fees and risk of margin calls if collateral value drops. We recommend setting up reminders and maintaining buffer collateral.",
    category: "Repayment",
  },
];
