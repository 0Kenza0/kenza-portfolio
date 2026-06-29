import { DATA } from "../../data/data.jsx";
import { useFadeIn } from "../../hooks/useFadeIn";

export function About() {
  const ref = useFadeIn();
  return (
    <section id="about" className="about-section">
      <div ref={ref} className="fade-in">
        <h2 className="section-title"><span className="section-num"></span> / À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            {DATA.bio.map((p, i) => (
              <p key={i} style={{ marginBottom: "16px" }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <p style={{ marginBottom: "16px" }}>Quelques technologies avec lesquelles je travaille en ce moment :</p>
            <ul className="about-skills">
              {DATA.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
