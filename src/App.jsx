import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Formation } from "./sections/Formation/Formation";
import { Experience } from "./sections/Experience/Experience";
import { Projects } from "./sections/Projects/Projects";
import { Contact } from "./sections/Contact/Contact";
import { ParticleBackground } from "./components/ParticleBackground/ParticleBackground.jsx";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main style={{ paddingLeft: "60px", paddingRight: "60px", maxWidth: "1400px", margin: "0 auto" }}>
        <ParticleBackground />
        <Hero />
        <About />
        <Formation />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
