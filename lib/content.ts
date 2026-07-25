// ---------------------------------------------------------------------------
// AdverMedia — Site content
// Every string in this file is sourced directly from the supplied brand
// assets (Business Brochure) or from the founder-story brief provided
// directly by the client. Nothing here is invented. If a fact is ever
// missing, leave a TODO rather than fabricate a number, name, or quote.
// ---------------------------------------------------------------------------

export const brand = {
  name: "AdverMedia",
  since: "2026",
  location: "Hyderabad, Telangana",
  email: "advermediamarketing@gmail.com",
  instagramHandle: "@advermedia.co",
  instagramUrl: "https://www.instagram.com/advermedia.co/?hl=en",
};

export const originStory = {
  eyebrow: "How it started",
  beats: [
    {
      label: "The Noticing",
      text: "AdverMedia was started by three student founders. We spent months observing local businesses, cafes and startups around Hyderabad.",
    },
    {
      label: "The Problem",
      text: "We noticed that many businesses were spending money on marketing but still struggling to build genuine local awareness.",
    },
    {
      label: "The Overlooked Talent",
      text: "At the same time, we saw hundreds of talented student creators producing quality content every day, but most of them never got meaningful opportunities to work with local businesses.",
    },
    {
      label: "The Belief",
      text: "We believed these two worlds should have been connected.",
    },
    {
      label: "The Decision",
      text: "Instead of building another traditional marketing agency, we decided to build a student-powered creator community that helps local businesses grow through authentic storytelling and hyperlocal reach.",
    },
  ],
  vision:
    "Our vision is not simply to run campaigns. Our vision is to create a revolution in the marketing industry by proving that communities are more powerful than advertisements.",
};

export const foundersNote =
  "Founded by three entrepreneurs from complementary backgrounds in business, technology, and research & analysis.";

export const missionStatement =
  "To help businesses scale through data-driven digital marketing while building opportunities for students and creators to collaborate, innovate, and grow together.";

export const differentiators = [
  {
    title: "Student Creator Network",
    text: "A strong community of passionate student creators and influencers who bring fresh ideas and unmatched energy.",
  },
  {
    title: "Data-Driven Strategies",
    text: "Every decision is backed by data, insights, and market research for maximum impact.",
  },
  {
    title: "Affordable Pricing",
    text: "High-quality marketing solutions that fit your budget and deliver real value.",
  },
  {
    title: "Personalized Service",
    text: "Custom strategies tailored to your business goals.",
  },
  {
    title: "AI-Powered Workflows",
    text: "We leverage AI tools and automation to improve efficiency, creativity, and results.",
  },
  {
    title: "Young Digital-Native Talent",
    text: "Young, trend-savvy talents who understand what works in today's fast-changing digital landscape.",
  },
  {
    title: "Fast Communication",
    text: "Quick responses, clear updates, and seamless collaboration at every step.",
  },
  {
    title: "Strategic & Business Analysis",
    text: "In-depth business and market analysis before every campaign to ensure the right strategy.",
  },
];

export const services = [
  {
    title: "Social Media Marketing",
    text: "Build your brand presence, engage your audience, and drive meaningful growth across social platforms.",
  },
  {
    title: "Search Engine Optimization",
    text: "Improve your website ranking, increase organic traffic, and grow your business with proven SEO strategies.",
  },
  {
    title: "Local SEO",
    text: "Get found by local customers and grow your business visibility on Google Search and Maps.",
  },
  {
    title: "Influencer Marketing",
    text: "Collaborate with the right creators to promote your brand and reach highly engaged local audiences.",
  },
  {
    title: "Paid Advertising",
    text: "Run high-performing ad campaigns on Google, Instagram, Facebook and other platforms that deliver maximum ROI.",
  },
  {
    title: "Branding & Graphic Design",
    text: "Create a strong visual identity that represents your brand and leaves a lasting impression.",
  },
  {
    title: "Content Creation",
    text: "Engaging content that captures attention, tells your story, and drives action across platforms.",
  },
  {
    title: "AI-Powered Marketing Solutions",
    text: "Leverage AI tools and smart automation to optimize campaigns, save time, and improve performance.",
  },
];

export const process = [
  {
    step: "01",
    title: "Business Onboarding",
    text: "The business confirms the collaboration and our team schedules the onboarding process.",
  },
  {
    step: "02",
    title: "Business Form Filled",
    text: "You share your business details, goals, target audience, services and campaign requirements.",
  },
  {
    step: "03",
    title: "Business & Market Analysis",
    text: "Our team analyzes the business, competitors and industry trends to identify growth opportunities.",
  },
  {
    step: "04",
    title: "Store Visit & Content Shoot",
    text: "Our team visits your location to capture high-quality photos, videos and brand content.",
  },
  {
    step: "05",
    title: "Editing & Creative Production",
    text: "Professional editing, branding, captions, graphics and campaign creatives are prepared.",
  },
  {
    step: "06",
    title: "Influencer Selection",
    text: "We shortlist suitable creators from the community based on audience, niche, location and objectives.",
  },
  {
    step: "07",
    title: "Campaign Launch",
    text: "Content is published across selected platforms while our team actively manages execution.",
  },
  {
    step: "08",
    title: "Performance Report",
    text: "You receive a detailed campaign report with reach, engagement, audience insights and recommendations.",
  },
];

export const pricing = {
  originalPrice: "₹60,000",
  offerPrice: "₹35,000",
  note: "One complete package. No confusing tiers.",
};

export const audiences = [
  "Cafés & Restaurants",
  "Salons",
  "Gyms & Fitness Studios",
  "Fashion Brands",
  "Startups",
  "Clinics",
  "Educational Institutes",
  "Retail Stores",
];

export const closingLines = {
  quote:
    "We're not just another marketing agency — we're your growth partner.",
  tagline: "Your Vision. Our Strategy. Real Growth.",
  sendOff: "Thank you for considering AdverMedia. We can't wait to grow together.",
};

export const communityImages = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/community/creator-${n}.jpg`;
});
