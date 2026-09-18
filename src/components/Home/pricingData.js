// Public price list. Ranges are real quotes, not placeholders —
// keep these in sync with the JSON-LD Service schema in index.html.

export const WHATSAPP = "919487745405";
export const WHATSAPP_DISPLAY = "+91 94877 45405";
export const EMAIL = "ragavan.devp@gmail.com";

export const waLink = (service) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    service
      ? `Hi Ragavan, I'm interested in ${service}. Can you share a quote?`
      : "Hi Ragavan, I'd like to discuss a project."
  )}`;

export const packages = [
  {
    id: "static-website",
    name: "Static Website",
    color: "var(--blue)",
    from: 5000,
    to: 20000,
    priceNote: "₹5,000 – ₹20,000",
    timeline: "3–7 days",
    tagline: "Business, portfolio & landing pages",
    popular: true,
    features: [
      "Up to 6 responsive pages",
      "Mobile & tablet friendly",
      "SEO basics + Google indexing",
      "Contact form & WhatsApp button",
      "Free SSL and domain setup",
    ],
  },
  {
    id: "dynamic-website",
    name: "Dynamic Web App",
    color: "var(--violet)",
    from: 40000,
    to: 300000,
    priceNote: "₹40,000 – ₹3,00,000",
    timeline: "3–10 weeks",
    tagline: "E-commerce, portals & custom systems",
    features: [
      "Admin dashboard you control",
      "User accounts & roles",
      "Payment gateway integration",
      "Database, APIs & reporting",
      "Deployed on your own VPS",
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    color: "var(--pink)",
    from: 20000,
    to: 100000,
    priceNote: "₹20,000 – ₹1,00,000",
    timeline: "2–8 weeks",
    tagline: "Android & iOS, published for you",
    features: [
      "React Native — one code, both stores",
      "Push notifications",
      "Play Store publishing included",
      "Offline support",
      "Backend & API included",
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    color: "var(--orange)",
    from: 8000,
    to: 40000,
    priceNote: "₹8,000 – ₹40,000 / month",
    timeline: "Monthly retainer",
    tagline: "SEO, Google & social presence",
    features: [
      "On-page & technical SEO",
      "Google Business Profile setup",
      "Google & Meta ad campaigns",
      "Social media content plan",
      "Monthly ranking reports",
    ],
  },
  {
    id: "vps-hosting",
    name: "VPS Hosting & Setup",
    color: "var(--amber)",
    from: 3000,
    to: 15000,
    priceNote: "₹3,000 – ₹15,000 setup",
    timeline: "1–3 days",
    tagline: "Servers configured and secured",
    features: [
      "VPS provisioning & hardening",
      "Nginx, SSL & domain mapping",
      "Database and backup setup",
      "CI/CD pipeline for deploys",
      "Email & DNS configuration",
    ],
  },
  {
    id: "maintenance",
    name: "Server Maintenance",
    color: "var(--blue)",
    from: 2000,
    to: 10000,
    priceNote: "₹2,000 – ₹10,000 / month",
    timeline: "Monthly",
    tagline: "Keeping it alive after launch",
    features: [
      "Uptime monitoring & alerts",
      "Security patches & updates",
      "Daily backups with restore",
      "Bug fixes & small changes",
      "Priority WhatsApp support",
    ],
  },
];

// Smaller add-ons listed as a compact row under the main cards.
export const addOns = [
  { name: "Payment Gateway Integration", price: "₹5,000 – ₹15,000" },
  { name: "AI Chatbot / Automation", price: "₹15,000 – ₹80,000" },
  { name: "Landing Page (single)", price: "₹3,000 – ₹8,000" },
  { name: "Website Redesign", price: "₹10,000 – ₹50,000" },
  { name: "Bug Fixing / Rescue Work", price: "₹1,000 / hour" },
  { name: "Google Business Profile", price: "₹2,000 – ₹5,000" },
];
