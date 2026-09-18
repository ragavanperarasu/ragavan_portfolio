import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {year} Ragavan — Freelance developer, Coimbatore.</p>

        <ul className="footer-links">
          <li>
            <Link to="/open-source">Open Source</Link>
          </li>
          <li>
            <Link to="/client-work">Client Work</Link>
          </li>
          <li>
            <a
              href="https://github.com/ragavanperarasu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ragavandevp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
