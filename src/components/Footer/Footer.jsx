import { DATA } from "../../data/data.jsx";

export function Footer() {
  return (
    <footer className="footer">
      <p>Conçu & développé par <a href="#">{DATA.name}</a></p>
      <p style={{ marginTop: "6px", fontSize: "13px" }}>
        Inspiré par <a href="https://brittanychiang.com" target="_blank" rel="noopener">Brittany Chiang</a>
      </p>
    </footer>
  );
}
