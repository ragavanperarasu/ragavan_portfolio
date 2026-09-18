import React from "react";
import {
  FiGlobe,
  FiSmartphone,
  FiCpu,
  FiServer,
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

// Each service owns one palette colour, reused as its accent.
const SERVICES = [
  {
    icon: FiGlobe,
    color: "var(--violet)",
    title: "Web Applications",
    text: "Full-stack web apps and sites on the MERN stack — storefronts, dashboards, admin panels and internal tools, built to run in production.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    icon: FiSmartphone,
    color: "var(--blue)",
    title: "Mobile Apps",
    text: "Cross-platform React Native apps for Android and iOS, shipped to the Play Store with push notifications and offline support.",
    tags: ["React Native", "Play Store", "Firebase"],
  },
  {
    icon: FiCpu,
    color: "var(--pink)",
    title: "AI Automation",
    text: "Put AI to work on the boring parts — chatbots, document and data extraction, content pipelines and workflows that run without you.",
    tags: ["LLM APIs", "Chatbots", "Workflow automation"],
  },
  {
    icon: FiServer,
    color: "var(--orange)",
    title: "DevOps & Deployment",
    text: "VPS setup and hardening, CI/CD pipelines, Nginx, SSL, domains and zero-downtime deploys — so releases are boring and repeatable.",
    tags: ["VPS", "CI/CD", "Nginx", "Docker", "SSL"],
  },
  {
    icon: FiCreditCard,
    color: "var(--amber)",
    title: "Payment Integration",
    text: "Razorpay and Stripe checkout wired in properly — orders, webhooks, refunds and reconciliation that survive real money moving.",
    tags: ["Razorpay", "Stripe", "Webhooks", "Checkout"],
  },
  {
    icon: FiShield,
    color: "var(--violet)",
    title: "System Design & Security",
    text: "API and database architecture, plus the hardening around it: secure auth, strict CSP and headers, and dependency audits.",
    tags: ["Architecture", "Auth", "CSP", "Audits"],
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="shell">
        <div className="services-head">
          <span className="eyebrow">What I do</span>
          <h2 className="section-title">
            One developer, the whole delivery.
          </h2>
          <p className="section-sub">
            Most projects need more than code — they need a server, a pipeline,
            a payment flow and someone who stays when it breaks. I cover all of
            it, so you brief one person instead of coordinating four.
          </p>
        </div>

        <div className="service-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                className="service-card"
                key={service.title}
                style={{ "--c": service.color }}
              >
                <span className="service-icon">
                  <Icon />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="service-tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
