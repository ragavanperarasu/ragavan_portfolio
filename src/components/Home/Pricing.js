import React from "react";
import { FiCheck, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { packages, addOns, waLink } from "./pricingData";

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="shell">
        <div className="pricing-head">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">
            Affordable, honest prices — no hidden cost.
          </h2>
          <p className="section-sub">
            Real ranges, not "contact for pricing". Where you land depends on
            scope, and I'll tell you before we start. Every project includes
            source code, deployment and a handover call.
          </p>
        </div>

        <div className="price-grid">
          {packages.map((pkg) => (
            <article
              className={`price-card${pkg.popular ? " is-popular" : ""}`}
              key={pkg.id}
              style={{ "--c": pkg.color }}
            >
              {pkg.popular && <span className="price-badge">Most asked</span>}

              <h3>{pkg.name}</h3>
              <p className="price-tagline">{pkg.tagline}</p>

              <p className="price-amount">{pkg.priceNote}</p>

              <p className="price-timeline">
                <FiClock /> {pkg.timeline}
              </p>

              <ul className="price-features">
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <FiCheck /> {feature}
                  </li>
                ))}
              </ul>

              <a
                className="price-cta"
                href={waLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Get a quote
              </a>
            </article>
          ))}
        </div>

        <div className="addons">
          <h3 className="addons-title">Also available</h3>
          <ul className="addon-list">
            {addOns.map((item) => (
              <li key={item.name}>
                <span className="addon-name">{item.name}</span>
                <span className="addon-price">{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="price-foot">
            Prices in INR, exclusive of third-party costs (domain, hosting,
            SMS/payment gateway fees). International clients billed in USD at
            equivalent rates.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
