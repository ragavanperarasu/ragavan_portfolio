import React from "react";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { EMAIL, WHATSAPP_DISPLAY, waLink } from "./pricingData";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <div className="contact-card">
          <div className="contact-inner">
            <h2>Have a project in mind?</h2>
            <p>
              Message me on WhatsApp with what you're building — I'll come back
              with an honest scope, a timeline and a fixed price, usually the
              same day.
            </p>

            <div className="contact-actions">
              <a
                className="btn-whatsapp"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> {WHATSAPP_DISPLAY}
              </a>
              <a className="btn-outline-light" href={`mailto:${EMAIL}`}>
                <FiMail /> Email me <FiArrowUpRight />
              </a>

              <div className="contact-socials">
                <a
                  href="https://github.com/ragavanperarasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ragavandevp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
