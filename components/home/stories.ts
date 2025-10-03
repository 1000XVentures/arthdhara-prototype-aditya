export type StorySlide = {
  id: string;
  title: string;
  description?: string;
  /** CSS color variable or hex, used for background */
  backgroundVar: string;
  /** Icon image source to render prominently */
  iconSrc: string;
};

export type StoryTopic = {
  id: string;
  label: string;
  slides: StorySlide[];
};

export const STORIES: Record<string, StoryTopic> = {
  whyLamf: {
    id: "whyLamf",
    label: "Why Loan against MF",
    slides: [
      {
        id: "wl-1",
        title: "Unlock Liquidity, Keep Investing",
        description:
          "Get instant access to funds while keeping your investment journey uninterrupted. Your mutual funds continue to grow and earn returns, potentially offsetting your loan interest costs. It's a smart way to meet your financial needs without breaking your long-term investment strategy.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/loan_against.png",
      },
      {
        id: "wl-2",
        title: "Lower Interest vs. Personal Loans",
        description:
          "Benefit from significantly lower interest rates compared to personal loans or credit cards. With rates starting from just 10.5% p.a., you can save thousands in interest costs. Plus, since your mutual funds act as collateral, approvals are faster and documentation requirements are minimal.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/loan_against.png",
      },
      {
        id: "wl-3",
        title: "Flexible Usage",
        description:
          "Use the funds for any purpose - whether it's managing emergencies, seizing investment opportunities, funding education, or planning a wedding. With flexible repayment options and no prepayment penalties, you're in control. Choose between regular EMIs or interest-only payments with flexible principal repayment.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/loan_against.png",
      },
    ],
  },
  getStarted: {
    id: "getStarted",
    label: "How to get started",
    slides: [
      {
        id: "gs-1",
        title: "Verify Your Holdings",
        description:
          "Quick and secure verification of your mutual fund portfolio through our trusted partners - CAMS and KFintech. Simply connect using your PAN or login to DigiLocker. Our advanced system automatically fetches and analyzes your eligible mutual fund units, ensuring a seamless experience.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/get_started.png",
      },
      {
        id: "gs-2",
        title: "Check Eligibility",
        description:
          "Get instant visibility of your eligible loan amount based on your portfolio value. Our smart algorithms calculate loan-to-value ratios for each scheme, considering factors like fund type, performance, and liquidity. See multiple loan options with different tenures and interest rates to choose what works best for you.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/get_started.png",
      },
      {
        id: "gs-3",
        title: "Complete KYC & Get Disbursal",
        description:
          "Complete your digital KYC in minutes using Aadhaar and video verification. Set up automatic repayments through eNACH mandate for hassle-free EMIs. Once approved, receive funds directly in your bank account within 24-48 hours. Our end-to-end digital process ensures quick and convenient loan disbursement.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/get_started.png",
      },
    ],
  },
  whyArthdhara: {
    id: "whyArthdhara",
    label: "Why use Arthdhara",
    slides: [
      {
        id: "wa-1",
        title: "Trusted Partners",
        description:
          "We've partnered with India's leading RTAs (CAMS & KFintech) and established NBFCs to ensure reliability and security. Our integration with official mutual fund registrars means your data is always accurate and up-to-date. Experience the trust of working with authorized and regulated financial institutions.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/why_use.png",
      },
      {
        id: "wa-2",
        title: "Transparent Pricing",
        description:
          "No hidden charges or surprise fees - we believe in complete transparency. See detailed break-up of interest rates, processing fees, and other charges upfront. Compare different loan options easily with our clear pricing structure. What you see is exactly what you get, with all terms and conditions clearly explained.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/why_use.png",
      },
      {
        id: "wa-3",
        title: "Secure by Design",
        description:
          "Your security is our priority. We use bank-grade encryption for all data transmission and storage. Access to your mutual fund information is strictly consent-based and time-bound. Our systems are regularly audited and comply with all regulatory requirements. Experience peace of mind with our robust security infrastructure.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/why_use.png",
      },
    ],
  },
  repayments: {
    id: "repayments",
    label: "Repayments Simplified",
    slides: [
      {
        id: "rp-1",
        title: "Pay Interest Only",
        description:
          "Enjoy the flexibility of interest-only EMIs to keep your monthly payments low. This option allows you to better manage your cash flow while maintaining your investments. Choose when to repay the principal amount based on your financial planning. Perfect for those who expect future liquidity or want to maximize investment returns.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/repayment.png",
      },
      {
        id: "rp-2",
        title: "Auto-Debit Setup",
        description:
          "Never miss a payment with our convenient eNACH system. One-time setup ensures automatic monthly payments from your bank account. Easily modify your mandate limits through our platform as your loan requirements change. Get payment reminders and instant confirmation for every transaction.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/repayment.png",
      },
      {
        id: "rp-3",
        title: "Close or Top-up Easily",
        description:
          "Flexibility to manage your loan as per your needs. Close your loan anytime with no prepayment penalties. As your mutual fund portfolio grows, easily apply for a top-up loan for additional funds. Track your loan status, repayment schedule, and portfolio value all in one place through our intuitive dashboard.",
        backgroundVar: "var(--story-light-beige)",
        iconSrc: "/images/icons/top_icons/repayment.png",
      },
    ],
  },
};

export type StoryKey = keyof typeof STORIES;
