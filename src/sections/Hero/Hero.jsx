import { useState, useEffect } from "react";
import { DATA } from "../../data/data.jsx";
import { IoMdMail } from "react-icons/io";

export function Hero() {
  const [typed, setTyped] = useState("");
  const full = "Salut, je suis " + DATA.name + ".";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle fade-in visible" style={{ transitionDelay: "200ms", fontWeight: "bold" }}>
          {typed}
          <span className="cursor-blink">|</span>
        </h2>
        <p className="hero-desc fade-in visible" style={{ transitionDelay: "400ms" }}>
          Étudiante en <span className="hero-highlight">Master MIAGE</span>, passionnée par le back-end, la data et l'IA.<br />
          Disponible en <span className="hero-highlight">alternance 24 mois</span> dès septembre 2026.
        </p>
        <button className="hero-cta fade-in visible" style={{ transitionDelay: "500ms" }}
          onClick={() => {
            navigator.clipboard.writeText(DATA.email);
            alert("Email copié !");
          }}
        >
          <IoMdMail size={20} />
          <span>Me contacter</span>
        </button>
      </div>
    </section>
  );
}