import Spain from "@assets/icons/España.svg";
import ReinoUnido from "@assets/icons/ReinoUnido.svg";
import Github from "@assets/icons/Github.svg";
import Document from "@assets/icons/Document.svg";
import LinkedIn from "@assets/icons/Linkedin.svg";
import Email from "@assets/icons/Email.svg";
import type { SvgComponent } from "astro/types";

interface Network {
  icon: SvgComponent;
  href: string;
  label: string;
}

interface Lang {
  idioma: string;
  nivel: string;
  icon: SvgComponent;
}

interface Experience {
  title: string;
  company: string;
  description: string[];
  startDate: string;
  endDate: string;
}

interface Education {
  title: string;
  company: string;
  date: string;
}

interface Certification {
  title: string;
  company: string;
  link: string;
}

export const networks: Network[] = [
  { icon: Github, href: "https://github.com/gunix06", label: "GitHub" },
  { icon: Document, href: "https://drive.google.com/file/d/1gdxkLeqyuxV8LewtQDZoJ_BT15V_5hR4/view?usp=sharing", label: "CV" },
  { icon: LinkedIn, href: "https://www.linkedin.com/in/brayan-cordova-tasayco/", label: "LinkedIn" },
  { icon: Email, href: "mailto:brayancordova@lumiacreators.com", label: "Email" },
];

export const langs: Lang[] = [
  {
    idioma: "Español",
    nivel: "Nativo",
    icon: Spain,
  },
  {
    idioma: "Inglés",
    nivel: "Pre-Intermedio (En formación activa)",
    icon: ReinoUnido,
  },
];

export const experiences: Experience[] = [
  {
    title: "Fundador & Desarrollador Java/Web",
    company: "Lumia Creators",
    description: [
      "Encargado de la viabilidad técnica y logística de eventos en vivo. Desarrollo mods y mecánicas personalizadas en Java (Fabric), y gestiono la optimización de servidores para soportar múltiples usuarios sin caídas de rendimiento, integrando el aspecto técnico con la experiencia de la comunidad",
    ],
    startDate: "Ene 2026",
    endDate: "Actualidad",
  },
  {
    title: "Lead Frontend developer & UX/UI Designer",
    company: "ONG Mujer la educación es poder",
    description: [
      "Desarrollé y desplegué una plataforma web para una ONG, mejorando la experiencia del usuario, el rendimiento y el SEO. Lideré el equipo de desarrollo y aseguré la adaptabilidad multiplataforma, utilizando tecnologías como React, Tailwind CSS y Astro.",
    ],
    startDate: "Dic 2024",
    endDate: "Feb 2025",
  },
];

export const education: Education[] = [
  {
    title: "Computación e informática",
    company: "CIBERTEC - Formación Profesional Técnica Superior",
    date: "Jun 2022 - Ene 2026",
  },
];

export const certifications: Certification[] = [
  {
    title: "GitHub Foundations",
    company: "GITHUB",
    link: "https://www.credly.com/badges/53e6243f-289c-4f5b-bd19-9f656181c7fb/linked_in_profile",
  },
  {
    title: "Fundamentos de Programación y Tecnologías de la Información",
    company: "CIBERTEC",
    link: "https://drive.google.com/file/d/1fdOxpFykdzLmF7Arrr8QRdEvPORluUFY/view?usp=sharing",
  },
  {
    title: "Frontend Developer Career Path",
    company: "SCRIMBA",
    link: "https://scrimba.com/certificate-cert24zAwPPowNQbsZ9S5UjmDzeEbHVd7EkoepQ7z",
  },
];
