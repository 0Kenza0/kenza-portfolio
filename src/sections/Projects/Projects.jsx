import { FaGithub } from "react-icons/fa";
import { DATA } from "../../data/data.jsx";
import { useFadeIn } from "../../hooks/useFadeIn";

export function Projects() {
  const ref = useFadeIn();
  return (
    <section id="projects" className="projects-section">
      <div ref={ref} className="fade-in">
        <div className="section-header">
          <h2 className="section-title"> / Projets</h2>
          <div className="header-divider" />
          <a href="https://github.com/0Kenza0" className="explore-link" target="_blank" rel="noopener noreferrer">
            Voir tous mes projets →
          </a>
        </div>
        <div className="projects-grid">
          {DATA.projects.map((p) => (
            <a key={p.title} href={p.live || p.github || "#"} className="project-card" target="_blank" rel="noopener noreferrer">
              <div className="project-card-top">
                <span className="folder-icon">📁</span>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" title="Live">
                      ↗
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
