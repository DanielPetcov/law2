import type { SlideId } from "../components/RenderSlide";

export const C = {
  cream: "#FAF6EF",
  cream2: "#F2EBD9",
  border: "#C8A96E",
  gold: "#B8860B",
  goldL: "#D4A843",
  navy: "#1B3A6B",
  navyL: "#2A5298",
  red: "#8B1A1A",
  redL: "#B22222",
  text: "#1A1A2E",
  muted: "#5A5A7A",
  white: "#FFFFFF",
};

export const SLIDES: { id: SlideId; label: string }[] = [
  { id: "cover", label: "Copertă" },
  { id: "intro", label: "Introducere" },
  { id: "acte1", label: "Acte normative I" },
  { id: "acte2", label: "Acte normative II" },
  { id: "constituire", label: "Constituire" },
  { id: "conducere", label: "Conducerea" },
  { id: "orgchart", label: "Organigramă" },
  { id: "atributii1", label: "Atribuții I" },
  { id: "atributii2", label: "Atribuții II" },
  { id: "sarcini", label: "Sarcini" },
  { id: "personal", label: "Personal" },
  { id: "concluzie", label: "Concluzie" },
  { id: "bibliografie", label: "Bibliografie" },
];
