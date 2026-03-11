import type { ComponentType } from "react";

import {
  SlideCover,
  SlideIntro,
  SlideActe1,
  SlideActe2,
  SlideConstituire,
  SlideConducere,
  SlideOrgchart,
  SlideAtributii1,
  SlideAtributii2,
  SlideSarcini,
  SlidePersonal,
  SlideConcluzie,
  SlideBibliografie,
} from "./others";

const map = {
  cover: SlideCover,
  intro: SlideIntro,
  acte1: SlideActe1,
  acte2: SlideActe2,
  constituire: SlideConstituire,
  conducere: SlideConducere,
  orgchart: SlideOrgchart,
  atributii1: SlideAtributii1,
  atributii2: SlideAtributii2,
  sarcini: SlideSarcini,
  personal: SlidePersonal,
  concluzie: SlideConcluzie,
  bibliografie: SlideBibliografie,
} satisfies Record<string, ComponentType<{ active: boolean }>>;
export type SlideId = keyof typeof map;

export function RenderSlide({ id, active }: { id: SlideId; active: boolean }) {
  const Comp = map[id];
  return <Comp active={active} />;
}
