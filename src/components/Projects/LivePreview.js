import { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BsGooglePlay } from "react-icons/bs";

/**
 * Browser-chrome framed preview of a live project.
 *
 * Sites that allow embedding get a real, scaled-down iframe loaded lazily
 * once the card scrolls into view. Sites that block framing (X-Frame-Options)
 * fall back to a branded panel.
 */
function LivePreview({ project }) {
  const isPlayStore = project.host === "play.google.com";
  const holderRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Only mount the iframe once the preview is near the viewport.
  useEffect(() => {
    const node = holderRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="preview-frame"
      style={{ "--accent": project.accent }}
      ref={holderRef}
    >
      <div className="preview-chrome">
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-url">{project.host}</span>
        <a
          className="preview-open"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} in a new tab`}
        >
          {isPlayStore ? <BsGooglePlay /> : <FiExternalLink />}
        </a>
      </div>

      <div className="preview-body">
        {project.embeddable && (
          <>
            {visible && (
              <iframe
                className={`preview-iframe${loaded ? " is-loaded" : ""}`}
                src={project.url}
                title={`${project.title} live preview`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                referrerPolicy="no-referrer"
                tabIndex={-1}
                onLoad={() => setLoaded(true)}
              />
            )}
            {!loaded && (
              <div className="preview-skeleton">
                <span className="preview-spinner" />
                <p>Loading live site…</p>
              </div>
            )}
            {/* Keeps scroll/click on the page, not inside the iframe. */}
            <a
              className="preview-veil"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <span className="preview-veil-cta">
                Open live site <FiExternalLink />
              </span>
            </a>
          </>
        )}

        {!project.embeddable && (
          <a
            className="preview-fallback"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="preview-mark">{project.title.charAt(0)}</span>
            <strong>{project.title}</strong>
            <span className="preview-fallback-note">{project.tagline}</span>
            <span className="preview-veil-cta">
              {isPlayStore ? (
                <>
                  View on Play Store <BsGooglePlay />
                </>
              ) : (
                <>
                  Open live site <FiExternalLink />
                </>
              )}
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

export default LivePreview;
