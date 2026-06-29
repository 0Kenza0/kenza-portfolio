import { DATA } from "../../data/data.jsx";
import { useFadeIn } from "../../hooks/useFadeIn";
import { IoMdMail } from "react-icons/io";

export function Contact() {
  const ref = useFadeIn();
  return (
    <section id="contact" className="contact-section">
      <div ref={ref} className="fade-in">
        <p className="contact-overline"> Et maintenant ?</p>
        <h2 className="contact-title">Travaillons ensemble</h2>
        <p className="contact-desc">
          Ma boîte mail est toujours ouverte. Que ce soit pour un projet, une opportunité ou juste pour dire bonjour —
          je répondrai dès que possible.
        </p>
        <button className="contact-btn"
          onClick={() => { 
            navigator.clipboard.writeText(DATA.email); 
            alert("Email copié !");
          }}
        >
          <IoMdMail size={20} />
          <span>Envoyer un message</span>
        </button>
      </div>
    </section>
  );
}
