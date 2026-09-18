import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const FACTS = [
  { key: "Education", value: "B.E. CSE — GCT Coimbatore" },
  { key: "Based in", value: "Coimbatore, India" },
  { key: "Works with", value: "Clients worldwide, remote" },
  { key: "Core stack", value: "MERN · React Native" },
];

function AboutIntro() {
  return (
    <section className="about-home" id="about">
      <div className="shell">
        <div className="about-grid">
          <div className="about-body">
            <span className="eyebrow">Background</span>
            <h2 className="section-title">
              I ship products, not prototypes.
            </h2>

            <p>
              I'm a <strong>freelance developer</strong> and a{" "}
              <strong>B.E. Computer Science and Engineering graduate</strong>{" "}
              from Government College of Technology, Coimbatore, with a Diploma
              in Computer Engineering before that.
            </p>
            <p>
              I built and still run <strong>My GCT</strong> — four web products
              and an Android app used across my college, free and open source.
              Building for a real campus taught me the parts that tutorials
              skip: migrations on live data, uptime, and support requests at
              11pm.
            </p>
            <p>
              For clients I've delivered e-commerce storefronts and B2B
              catalogues that take <strong>real orders and real payments</strong>
              , each one deployed on its own VPS and handed over with an admin
              panel the owner runs without calling me.
            </p>
            <p>
              I work directly with you — no agency layer, no account manager.
              You get straight answers about what a feature costs and whether
              it's worth building.
            </p>

            <Link className="btn-ghost" to="/open-source">
              Explore the open-source work <FiArrowUpRight />
            </Link>
          </div>

          <aside className="about-side">
            <img
              src="./ragavan.jpg"
              alt="Ragavan, freelance developer"
              className="about-photo"
              loading="lazy"
            />
            <ul className="about-facts">
              {FACTS.map((fact) => (
                <li key={fact.key}>
                  <span className="fact-key">{fact.key}</span>
                  <span className="fact-val">{fact.value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
