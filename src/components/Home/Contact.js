import React from "react";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const EMAIL = "ragavan.devp@gmail.com";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <div className="contact-card">
          <div className="contact-inner">
            <h2>Have a project in mind?</h2>
            <p>
              Tell me what you're building and what it needs to do. I'll come
              back with an honest scope, a timeline and a price — usually
              within a day.
            </p>

            <div className="contact-actions">
              <a className="btn-light" href={`mailto:${EMAIL}`}>
                <FiMail /> {EMAIL}
              </a>
              <a
                className="btn-outline-light"
                href="https://www.linkedin.com/in/ragavandevp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on LinkedIn <FiArrowUpRight />
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
