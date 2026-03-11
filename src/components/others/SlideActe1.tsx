import { C } from "../../lib/common";

import { Chenar, Divider, Tag, Heading, ActCard } from "../ui";

export function SlideActe1({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        paddingTop: 10,
      }}
    >
      <Chenar />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 72px",
        }}
      >
        <div className="anim anim-sr d1">
          <Tag>Cadrul Juridic · Slide 1 / 2</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={46}>
            Acte Normative{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Principale</em>
          </Heading>
        </div>
        <Divider />
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
            {[
              {
                n: "01",
                year: "1992",
                color: C.navy,
                title: "Legea nr.876-XII din 22 ian. 1992",
                desc: "Legea fondatoare — instituie pentru prima dată Serviciul Fiscal de Stat ca sistem unitar de organe fiscale pe teritoriul Republicii Moldova.",
              },
              {
                n: "02",
                year: "1997",
                color: C.navyL,
                title: "Codul Fiscal al RM (Titlul V)",
                desc: "Art. 131–153 reglementează organizarea, funcțiile, atribuțiile, drepturile și obligațiile SFS. Baza legală principală a activității fiscale.",
              },
              {
                n: "03",
                year: "2017",
                color: C.gold,
                title: "Legea nr.281 din 16.12.2016",
                desc: "Amendează Codul Fiscal, stabilind SFS ca persoană juridică unică pentru administrarea fiscală pe întreg teritoriul RM, cu aplicare din 1 apr. 2017.",
              },
              {
                n: "04",
                year: "2017",
                color: C.red,
                title: "HG nr.395/2017 — Regulamentul SFS",
                desc: "Hotărârea Guvernului care aprobă Regulamentul intern de organizare și funcționare a Serviciului Fiscal de Stat. Definește structura și atribuțiile detaliate.",
              },
            ].map((a) => (
              <div className="anim anim-fu d3" key={a.n}>
                <ActCard {...a} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
