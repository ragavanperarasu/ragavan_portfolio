import { Container } from "react-bootstrap";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { BsGooglePlay, BsGithub } from "react-icons/bs";

import Particle from "../Particle";
import LivePreview from "./LivePreview";
import TechStack from "./TechStack";
import { projects } from "./projectData";

const LINK_ICONS = {
  site: FiExternalLink,
  play: BsGooglePlay,
  github: BsGithub,
};

function ProjectRow({ project, index }) {
  return (
    <article
      className={`work-row${index % 2 === 1 ? " is-flipped" : ""}`}
      style={{ "--accent": project.accent }}
    >
      <div className="work-info">
        <div className="work-meta">
          <span className="work-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="work-status">
            <span className="work-status-dot" />
            {project.status}
          </span>
          <span
            className={`work-tag work-tag-${
              project.group === "client" ? "paid" : "free"
            }`}
          >
            {project.group === "client" ? "Paid Project" : "Free & Open Source"}
          </span>
          {project.client && (
            <span className="work-client">{project.client}</span>
          )}
        </div>

        <h3 className="work-title">{project.title}</h3>
        <p className="work-tagline">{project.tagline}</p>
        <p className="work-description">{project.description}</p>

        <ul className="work-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="work-stack">
          <span className="work-stack-label">Built with</span>
          <TechStack items={project.tech} />
        </div>

        <div className="work-actions">
          {project.links.map((link) => {
            const Icon = LINK_ICONS[link.type] || FiExternalLink;
            return (
              <a
                key={link.url}
                className="work-btn"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon /> {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="work-visual">
        <LivePreview project={project} />
      </div>
    </article>
  );
}

const PAGES = {
  mygct: {
    eyebrow: "Open Source",
    title: (
      <>
        Built free for my <strong className="purple">college</strong>
      </>
    ),
    sub: "An open-source ecosystem I built and run for Government College of Technology, Coimbatore. Free for every student and staff member, no licence, no fee. Every preview below is the live site.",
  },
  client: {
    eyebrow: "Client Work",
    title: (
      <>
        Delivered for <strong className="purple">paying clients</strong>
      </>
    ),
    sub: "Commissioned, paid work for real businesses — live storefronts and catalogues taking real orders and real payments, handed over with admin panels the owners run themselves.",
  },
};

function Projects({ group: groupId = "mygct" }) {
  const page = PAGES[groupId];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="work-container">
        <header className="work-header">
          <p className="work-eyebrow">{page.eyebrow}</p>
          <h1 className="work-page-title">{page.title}</h1>
          <p className="work-page-sub">{page.sub}</p>
        </header>

        <section className="work-group">
          {projects
            .filter((p) => p.group === groupId)
            .map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
        </section>

        <div className="work-footer-cta">
          <p>
            {groupId === "client"
              ? "Want something like this built for your business?"
              : "Want to see how these are built?"}
          </p>
          <a
            className="work-btn work-btn-lg"
            href="https://github.com/ragavanperarasu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> More on GitHub <FiArrowUpRight />
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
