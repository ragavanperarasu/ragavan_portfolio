import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import { waLink, WHATSAPP_DISPLAY } from "../Home/pricingData";

const FACTS = [
  { key: "Role", value: "Freelance developer" },
  { key: "Education", value: "B.E. CSE — GCT Coimbatore" },
  { key: "Also", value: "Diploma in Computer Engineering" },
  { key: "From", value: "Tiruvannamalai, Tamil Nadu" },
  { key: "Based in", value: "Coimbatore, India" },
  { key: "Works with", value: "Clients across India, remote" },
];

const PRINCIPLES = [
  {
    color: "var(--violet)",
    title: "You own everything",
    text: "Source code, server access, admin logins and domains are yours from day one. No lock-in, no hostage situations.",
  },
  {
    color: "var(--blue)",
    title: "You talk to the developer",
    text: "No agency layer and no account manager relaying messages. The person who writes the code answers your WhatsApp.",
  },
  {
    color: "var(--pink)",
    title: "Honest scope, fixed price",
    text: "I'll tell you when a feature isn't worth building, and what it costs before we start — not after.",
  },
  {
    color: "var(--orange)",
    title: "It stays running",
    text: "Deployment, monitoring and backups are part of the job. I don't disappear the day the site goes live.",
  },
];

function About() {
  return (
    <>
      <section className="about-page">
        <div className="shell">
          <div className="about-hero">
            <div>
              <span className="eyebrow">About</span>
              <h1 className="about-page-title">
                The developer behind the <span className="accent">work</span>.
              </h1>
              <p className="about-lede">
                I'm Ragavan — a freelance developer building web applications,
                mobile apps and the infrastructure that keeps them online. I
                work directly with the people who use what I build, from
                college students to business owners running their first online
                store.
              </p>
              <p className="about-location">
                <FiMapPin /> Coimbatore, Tamil Nadu — working with clients
                anywhere
              </p>

              <div className="about-actions">
                <a
                  className="btn-whatsapp"
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> {WHATSAPP_DISPLAY}
                </a>
                <Link className="btn-ghost" to="/client-work">
                  See client work <FiArrowUpRight />
                </Link>
              </div>
            </div>

            <aside className="about-side">
              <img
                src="./ragavan.jpg"
                alt="Ragavan, freelance developer in Coimbatore"
                className="about-photo"
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

      <section className="about-story">
        <div className="shell">
          <div className="story-grid">
            <div>
              <span className="eyebrow">The short version</span>
              <h2 className="section-title">
                I learned this by shipping, not by studying.
              </h2>
            </div>
            <div className="story-body">
              <p>
                I graduated with a{" "}
                <strong>B.E. in Computer Science and Engineering</strong> from
                Government College of Technology, Coimbatore, after a{" "}
                <strong>Diploma in Computer Engineering</strong> at Government
                Polytechnic College, Tiruvannamalai.
              </p>
              <p>
                The real education was <strong>My GCT</strong> — a platform I
                built and still run for my college. Four web products and an
                Android app, free and open source, used by students and staff
                every day. Running it taught me the parts tutorials skip:
                migrations on live data, uptime at exam time, and support
                requests at 11pm.
              </p>
              <p>
                Since then I've delivered{" "}
                <strong>e-commerce storefronts and B2B catalogues</strong> for
                paying clients — sites taking real orders and real payments,
                each deployed on its own VPS and handed over with an admin
                panel the owner runs without calling me.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="shell">
          <span className="eyebrow">How I work</span>
          <h2 className="section-title">What you get, every time.</h2>

          <div className="principle-grid">
            {PRINCIPLES.map((item) => (
              <article
                className="principle-card"
                key={item.title}
                style={{ "--c": item.color }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-skills">
        <div className="shell">
          <span className="eyebrow">Toolkit</span>
          <h2 className="section-title">Technologies I build with.</h2>
          <Techstack />

          <h3 className="skills-sub">Tools I use daily</h3>
          <Toolstack />

          <h3 className="skills-sub">Code I've been writing</h3>
          <Github />
        </div>
      </section>
    </>
  );
}

export default About;
