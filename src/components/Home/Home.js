import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import Type from "./Type";
import Services from "./Services";
import AboutIntro from "./AboutIntro";
import Contact from "./Contact";

const PROOF = [
  { num: "8", label: "Products live in production" },
  { num: "5", label: "Platform apps for my college" },
  { num: "3", label: "Paying business clients" },
  { num: "1", label: "Android app on Play Store" },
];

function Home() {
  const { state } = useLocation();

  // Arriving from "Hire me" on another page: scroll to the contact block.
  useEffect(() => {
    if (state?.scrollTo) {
      document
        .getElementById(state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <span className="hero-status">
            <span className="status-dot" />
            Available for freelance projects
          </span>

          <h1>
            I build software that <span className="accent">ships</span>.
          </h1>

          <div className="hero-type">
            <span className="hero-type-label">I do</span>
            <Type />
          </div>

          <p className="hero-lede">
            Freelance developer working end to end — from the first sketch to a
            deployed, monitored product your customers actually use. Web apps,
            mobile apps, automation and the infrastructure underneath.
          </p>

          <div className="hero-actions">
            <a className="btn-ink" href="#contact">
              Start a project <FiArrowRight />
            </a>
            <Link className="btn-ghost" to="/client-work">
              See client work <FiArrowUpRight />
            </Link>
          </div>

          <div className="hero-proof">
            {PROOF.map((item) => (
              <div className="proof-item" key={item.label}>
                <span className="proof-num">{item.num}</span>
                <span className="proof-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <AboutIntro />
      <Contact />
    </>
  );
}

export default Home;
