import { Container } from "react-bootstrap";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { BsGooglePlay, BsGithub } from "react-icons/bs";

import Particle from "../Particle";
import LivePreview from "./LivePreview";
import TechStack from "./TechStack";
import { projects, groups } from "./projectData";

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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="work-container">
        <header className="work-header">
          <p className="work-eyebrow">Portfolio</p>
          <h1 className="work-page-title">
            Things I've <strong className="purple">shipped</strong>
          </h1>
          <p className="work-page-sub">
            Products running in production — a campus ecosystem used across my
            college, and storefronts built for real businesses. Every preview
            below is the live site.
          </p>
        </header>

        {groups.map((group) => {
          const items = projects.filter((p) => p.group === group.id);
          return (
            <section key={group.id} className="work-group">
              <div className="work-group-head">
                <span className="work-group-label">{group.label}</span>
                <h2 className="work-group-title">{group.title}</h2>
                <p className="work-group-blurb">{group.blurb}</p>
              </div>

              {items.map((project, i) => (
                <ProjectRow key={project.id} project={project} index={i} />
              ))}
            </section>
          );
        })}

        <div className="work-footer-cta">
          <p>Want something like this built?</p>
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
