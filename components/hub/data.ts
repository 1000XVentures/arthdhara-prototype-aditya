"use client";

import type { Article, HubCategory, VideoItem } from "./types";

export const HUB_CATEGORIES = [
  "Basics",
  "Advanced Tips",
  "Risks & Precautions",
  "FAQs",
] as const satisfies readonly HubCategory[];

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "LAMF Better: Smart Borrowing Guide",
    category: "Basics",
    summary: "Learn about how LAMF works and its benefits",
    slug: "understanding-lamf",
    heroImageUrl: "/images/onboarding/img1.png",
    imagePath: "/images/recommended_image/LAMF Better.png",
    content: [
      "A loan against mutual funds (LAMF) lets you unlock liquidity without redeeming your investments.",
      "Your units are pledged to the lender as collateral while you continue to participate in market movements.",
      "In this guide, we explain the flow, margining, and what to expect across each step.",
    ],
    href: "/hub/articles/understanding-lamf",
  },
  {
    id: "2",
    title: "Portfolio Strategy: Maximizing Returns",
    category: "Advanced Tips",
    summary: "Maximize your LAMF benefits with these pro tips",
    slug: "portfolio-strategy",
    heroImageUrl: "/images/onboarding/img2.png",
    imagePath: "/images/recommended_image/portfolio strategy.png",
    content: [
      "LAMF typically offers lower interest compared to unsecured loans.",
      "Processing is fast, and you retain your invested position in the market.",
      "Great for short-term liquidity needs without disrupting long-term plans.",
    ],
    href: "/hub/articles/portfolio-strategy",
  },
  {
    id: "3",
    title: "Optimize Your Loan Tenure",
    category: "Risks & Precautions",
    summary: "Important precautions when taking LAMF",
    slug: "optimize-tenure",
    heroImageUrl: "/images/onboarding/img3.png",
    imagePath: "/images/recommended_image/optimize tenure.png",
    content: [
      "Tenure and EMI should reflect your income stability and expected cash flows.",
      "A longer tenure reduces monthly outgo but may increase total interest paid.",
      "We cover practical frameworks to choose a balanced structure.",
    ],
    href: "/hub/articles/optimize-tenure",
  },
  {
    id: "4",
    title: "Watch LAMF 101: Complete Guide",
    category: "Basics",
    summary: "Complete video guide about LAMF",
    slug: "lamf-101-guide",
    heroImageUrl: "/images/onboarding/img4.png",
    imagePath: "/images/recommended_image/watch LAMF 101.png",
    content: [
      "LAMF is subject to market risks and collateral revaluation (MTM).",
      "Maintain buffers to handle potential margin calls during drawdowns.",
      "This article outlines practical steps to manage risk proactively.",
    ],
    href: "/hub/articles/lamf-101-guide",
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Understanding Mutual Fund NAV Calculation",
    duration: "8:45",
    mediaType: "video",
    bgClassName: "bg-[#2563EB]",
    brandText: "ET",
    href: "/hub/articles/how-lamf-works",
    hideBadge: true,
    category: "Basics",
  },
  {
    id: "v2",
    title: "How to Choose the Right Mutual Fund Category",
    duration: "12:30",
    mediaType: "video",
    bgClassName: "bg-[#059669]",
    brandText: "MF101",
    href: "/hub/articles/optimizing-tenure-and-emi",
    hideBadge: true,
    category: "Basics",
  },
  {
    id: "v3",
    title: "Maximizing Returns: SIP vs Lump Sum Investment",
    duration: "15:20",
    mediaType: "video",
    bgClassName: "bg-[#7C3AED]",
    brandText: "FIN",
    href: "/hub/articles/lamf-eligibility-criteria",
    hideBadge: true,
    category: "Advanced Tips",
  },
  {
    id: "v4",
    title: "Tax Benefits of ELSS Mutual Funds Explained",
    mediaType: "article",
    bgClassName: "bg-[#EA580C]",
    brandText: "TAX",
    href: "/hub/articles/benefits-of-lamf",
    hideBadge: true,
    category: "FAQs",
  },
  {
    id: "v5",
    title: "Portfolio Diversification Strategies for 2025",
    mediaType: "article",
    bgClassName: "bg-[#0891B2]",
    brandText: "PRO",
    href: "/hub/articles/understanding-lamf-risks",
    hideBadge: true,
    category: "Risks & Precautions",
  },
];
