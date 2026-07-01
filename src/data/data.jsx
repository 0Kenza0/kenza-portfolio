import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCvFilled } from "react-icons/tb";


export const DATA = {
  name: "Kenza",
  role: "Développeur Full-Stack",
  email: "Kenzachahnaz@icloud.com",
  bio: [
    `Etudiante en <b>Master MIAGE en alternance</b> — Ingénierie des Systèmes Intelligents à l'Université Paris Nanterre, que j'intègre en septembre 2026. Je suis actuellement <b>à la recherche d'une alternance de 24 mois</b> (rythme 3 semaines école / 3 semaines entreprise).`,
    `Je suis attirée par le développement back-end, la conception de bases de données, l'analyse de données et l'IA.`,
  ],
  skills: ["Java", "C#", "Python", "JavaScript", "React", ".NET"],
  formations: [
    {
      name: "Master MIAGE",
      school: "Université Paris Nanterre",
      date: "2026 - 2028",
      descripton: [
        "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
        "Spécialité Systèmes d'Information Fiables et Intelligence des Données",
      ],
    },
    {
      name: "Double-licence MIASHS et Economie/Gestion",
      school: "Université Paris Nanterre",
      date: "2022 - 2026 ",
      descripton: [
        "MIASHS : Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales",
        "Voie Informatique et Gestion",
      ],
    },
    {
      name: "Baccalauréat général",
      school: "Lycée Louise Michel",
      date: "2021 - 2022 ",
      descripton: ["Spécialité Mathématiques et Physique-chimie"],
    },
  ],
  experiences: [
    {
      company: "FPMAC",
      role: "Stagiaire développeuse logicielle",
      date: "Avril – Juin 2026",
      bullets: [
        "Migration et modernisation d'une suite logicielle professionnelle de C# .NET 4.5 vers .NET 8/10",
      ],
    },
  ],
  projects: [
    {
      title: "Graphe de Similarité — Patients Diabétiques",
      desc: "Construction et analyse d'un graphe de similarité entre 1 879 patients diabétiques à partir de données cliniques réelles, avec détection automatique de 4 profils médicaux via l'algorithme de Louvain.",
      tech: ["Python", "Streamlit", "NetworkX", "Pandas"],
      github: "https://github.com/0Kenza0/graphe-similarite-diabete",
      live: "https://diabgraphe.streamlit.app/",
    },
    {
      title: "Portfolio personnel",
      desc: "Mon portfolio personnel, développé avec React et Vite, comprenant sections À propos, Formation, Expérience et Projets, avec animations au scroll et navigation responsive.",
      tech: ["React", "Vite", "Material UI"],
      github: "#",
      live: "#",
    },
    {
      title: "Plateforme de Réservation de Salles",
      desc: "Site web de réservation de salles avec trois interfaces distinctes : clients, administrateurs et techniciens, chacune avec ses propres fonctionnalités de gestion.",
      tech: ["Django", "Python", "HTML/CSS"],
      github: "#", // a changer
      live: null,
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/0Kenza0", icon: <FaGithub size={20} /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kenzachahnaz/", icon: <FaLinkedin size={20} /> },
    { label: "CV", url: "public/CV-Alternance- CHAHNAZ- Kenza.pdf", icon: <TbFileCvFilled size={20} /> }, // mettre url cv
  ],
};
