import { useState, useEffect } from "react";
import { DATA } from "../../data/data.jsx";

export function Navbar({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["À propos", "Formation", "Expérience", "Projets", "Contact"];
  const ids = ["about", "formation", "experience", "projects", "contact"];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <a href="#" className="navbar-logo">{DATA.name.split(" ")[0]}</a>
          <div className="navbar-links">
            {links.map((l, i) => (
              <a key={l} href={`#${ids[i]}`}>{l}</a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {DATA.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: "var(--slate)", transition: "color 0.2s" }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu" onClick={() => setMobileOpen(false)}>
          {links.map((l, i) => (
            <a key={l} href={`#${ids[i]}`}>
              <span style={{ color: "var(--green)", fontSize: "18px" }}>0{i + 1}. </span>{l}
            </a>
          ))}
          <a href="#" style={{ border: "1px solid var(--green)", padding: "12px 32px", borderRadius: "4px", color: "var(--green)" }}>
            CV
          </a>
        </div>
      )}
    </>
  );
}
