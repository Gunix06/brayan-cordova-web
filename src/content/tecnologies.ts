import AstroIcon from "@assets/icons/Astro.svg";
import TypescriptIcon from "@assets/icons/TypeScript.svg";
import JavascriptIcon from "@assets/icons/Javascript.svg";
import TailwindcssIcon from "@assets/icons/TailwindCSS.svg";
import FigmaIcon from "@assets/icons/Figma.svg";
import VercelIcon from "@assets/icons/Vercel.svg";
import NextjsIcon from "@assets/icons/NextJS.svg";
import ReactIcon from "@assets/icons/React.svg";
import NodejsIcon from "@assets/icons/NodeJS.svg";
import MysqlIcon from "@assets/icons/MySQL.svg";
import BootstrapIcon from "@assets/icons/Bootstrap.svg";
import SeoIcon from "@assets/icons/SEO.svg";
import GoogleAnalitycsIcon from "@assets/icons/GoogleAnalytics.svg";
import PhotoshopIcon from "@assets/icons/Photoshop.svg";
import IllustratorIcon from "@assets/icons/Illustrator.svg";
import Cloudflare from "@assets/icons/Cloudflare.svg";
import Java from "@assets/icons/Java.svg";
import Expo from "@assets/icons/Expo.svg";
import Supabase from "@assets/icons/Supabase.svg";
import FabricMc from "@assets/icons/FabricMc.svg";
import type { SvgComponent } from "astro/types";

export type Tecnology = { name: string; icon: SvgComponent; type: "frontend" | "backend" | "cloud" | "design" };

export const tecnologies = {
  Astro: { name: "Astro", icon: AstroIcon, type: "frontend" },
  Typescript: { name: "Typescript", icon: TypescriptIcon, type: "frontend" },
  Javascript: { name: "Javascript", icon: JavascriptIcon, type: "frontend" },
  Tailwindcss: { name: "Tailwindcss", icon: TailwindcssIcon, type: "frontend" },
  Figma: { name: "Figma", icon: FigmaIcon, type: "design" },
  Vercel: { name: "Vercel", icon: VercelIcon, type: "cloud" },
  Nextjs: { name: "Nextjs", icon: NextjsIcon, type: "frontend" },
  React: { name: "React", icon: ReactIcon, type: "frontend" },
  Nodejs: { name: "Nodejs", icon: NodejsIcon, type: "frontend" },
  Mysql: { name: "Mysql", icon: MysqlIcon, type: "backend" },
  Bootstrap: { name: "Bootstrap", icon: BootstrapIcon, type: "frontend" },
  Seo: { name: "Seo", icon: SeoIcon, type: "cloud" },
  GoogleAnalitycs: { name: "Google Analitycs", icon: GoogleAnalitycsIcon, type: "cloud" },
  Photoshop: { name: "Photoshop", icon: PhotoshopIcon, type: "design" },
  Illustrator: { name: "Illustrator", icon: IllustratorIcon, type: "design" },
  Cloudflare: { name: "Cloudflare", icon: Cloudflare, type: "cloud" },
  Java: { name: "Java", icon: Java, type: "backend" },
  ReactNative: { name: "React Native", icon: ReactIcon, type: "frontend" },
  Expo: { name: "Expo", icon: Expo, type: "frontend" },
  Supabase: { name: "Supabase", icon: Supabase, type: "backend" },
  FabricMc: { name: "FabricMc", icon: FabricMc, type: "backend" },
} satisfies Record<string, Tecnology>;

export const tecnologiesList: Tecnology[] = Object.values(tecnologies);
