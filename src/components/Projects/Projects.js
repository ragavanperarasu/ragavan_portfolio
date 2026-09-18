import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { BsGooglePlay, BsGithub } from "react-icons/bs";

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
                className="btn-ink"
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
        Built free for my <span className="accent">college</span>
      </>
    ),
    sub: "Work I give away — the My GCT ecosystem I built and run for Government College of Technology, Coimbatore, free for every student and staff member, plus this portfolio itself. Every preview below is the live site.",
  },
  client: {
    eyebrow: "Client Work",
    title: (
      <>
        Delivered for <span className="accent">paying clients</span>
      </>
    ),
    sub: "Commissioned, paid work for real businesses — live storefronts and catalogues taking real orders and real payments, handed over with admin panels the owners run themselves.",
  },
};

function Projects({ group: groupId = "mygct" }) {
  const page = PAGES[groupId];

  return (
    <section className="work-page">
      <div className="shell">
        <header className="work-header">
          <span className="eyebrow">{page.eyebrow}</span>
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
            className="btn-ink"
            href="https://github.com/ragavanperarasu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> More on GitHub <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
