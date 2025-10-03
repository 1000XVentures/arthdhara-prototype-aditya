export type ArticleDetail = {
  slug: string;
  heading: string;
  tags: string[];
  paragraphs: string[];
  heroImageUrl?: string;
};

export const ARTICLES_BY_SLUG: Record<string, ArticleDetail> = {
  "understanding-lamf": {
    slug: "understanding-lamf",
    heading: "LAMF Better: Smart Borrowing Guide",
    tags: ["LAMF Basics", "Smart Borrowing", "Guide"],
    paragraphs: [
      "A loan against mutual funds (LAMF) lets you unlock liquidity without redeeming your investments.",
      "Your units are pledged to the lender as collateral while you continue to participate in market movements.",
      "In this guide, we explain the flow, margining, and what to expect across each step.",
      "Learn how to make the most of your mutual fund investments while maintaining liquidity for your financial needs.",
    ],
    heroImageUrl: "/images/recommended_image/LAMF Better.png",
  },
  "portfolio-strategy": {
    slug: "portfolio-strategy",
    heading: "Portfolio Strategy: Maximizing Returns",
    tags: ["Portfolio", "Strategy", "Returns"],
    paragraphs: [
      "LAMF typically offers lower interest compared to unsecured loans.",
      "Processing is fast, and you retain your invested position in the market.",
      "Great for short-term liquidity needs without disrupting long-term plans.",
      "Learn advanced strategies to optimize your portfolio while leveraging LAMF benefits.",
    ],
    heroImageUrl: "/images/recommended_image/portfolio strategy.png",
  },
  "optimize-tenure": {
    slug: "optimize-tenure",
    heading: "Optimize Your Loan Tenure",
    tags: ["Tenure", "Optimization", "Planning"],
    paragraphs: [
      "Tenure and EMI should reflect your income stability and expected cash flows.",
      "A longer tenure reduces monthly outgo but may increase total interest paid.",
      "We cover practical frameworks to choose a balanced structure.",
      "Discover how to optimize your loan tenure for maximum financial benefit.",
    ],
    heroImageUrl: "/images/recommended_image/optimize tenure.png",
  },
  "lamf-101-guide": {
    slug: "lamf-101-guide",
    heading: "Watch LAMF 101: Complete Guide",
    tags: ["LAMF 101", "Complete Guide", "Basics"],
    paragraphs: [
      "LAMF is subject to market risks and collateral revaluation (MTM).",
      "Maintain buffers to handle potential margin calls during drawdowns.",
      "This article outlines practical steps to manage risk proactively.",
      "A comprehensive guide covering all aspects of Loan Against Mutual Funds from basics to advanced strategies.",
    ],
    heroImageUrl: "/images/recommended_image/watch LAMF 101.png",
  },
  "how-lamf-works": {
    slug: "how-lamf-works",
    heading: "How LAMF Works",
    tags: ["LAMF Basics", "Pledging", "Liquidity"],
    paragraphs: [
      "A loan against mutual funds (LAMF) lets you unlock liquidity without redeeming your investments.",
      "Your units are pledged to the lender as collateral while you continue to participate in market movements.",
      "In this guide, we explain the flow, margining, and what to expect across each step.",
    ],
    heroImageUrl: "/images/onboarding/img1.png",
  },
  "benefits-of-lamf": {
    slug: "benefits-of-lamf",
    heading: "Benefits of LAMF",
    tags: ["Lower Interest", "Fast Processing", "Market Exposure"],
    paragraphs: [
      "LAMF typically offers lower interest compared to unsecured loans.",
      "Processing is fast, and you retain your invested position in the market.",
      "Great for short-term liquidity needs without disrupting long-term plans.",
    ],
    heroImageUrl: "/images/onboarding/img2.png",
  },
  "optimizing-tenure-and-emi": {
    slug: "optimizing-tenure-and-emi",
    heading: "Optimizing Tenure and EMI",
    tags: ["Planning", "Cashflow", "EMI"],
    paragraphs: [
      "Tenure and EMI should reflect your income stability and expected cash flows.",
      "A longer tenure reduces monthly outgo but may increase total interest paid.",
      "We cover practical frameworks to choose a balanced structure.",
    ],
    heroImageUrl: "/images/onboarding/img3.png",
  },
  "understanding-lamf-risks": {
    slug: "understanding-lamf-risks",
    heading: "Understanding Risks",
    tags: ["Risk", "MTM", "Margin"],
    paragraphs: [
      "LAMF is subject to market risks and collateral revaluation (MTM).",
      "Maintain buffers to handle potential margin calls during drawdowns.",
      "This article outlines practical steps to manage risk proactively.",
    ],
    heroImageUrl: "/images/onboarding/img4.png",
  },
  "lamf-eligibility-criteria": {
    slug: "lamf-eligibility-criteria",
    heading: "Eligibility Criteria",
    tags: ["Eligibility", "KYC", "Portfolio"],
    paragraphs: [
      "Eligibility varies by lender, fund category, and your KYC status.",
      "A good credit score helps; some lenders specify minimum portfolio value.",
      "We list common criteria and how to quickly check your eligibility.",
    ],
    heroImageUrl: "/images/onboarding/img1.png",
  },
};
