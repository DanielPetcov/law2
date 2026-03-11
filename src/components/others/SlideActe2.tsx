import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider, ActCard } from "../ui";

export function SlideActe2({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        height: "100%",
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
          <Tag>Cadrul Juridic · Slide 2 / 2</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={46}>
            Acte Normative{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Secundare</em>
          </Heading>
        </div>
        <Divider />
        <div className="slide-scroll">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {[
              {
                n: "05",
                year: "2014",
                color: C.navy,
                title: "HG nr.500/2014 — Simbolica SFS",
                desc: "Aprobă stema, drapelul și culoarea corporativă a SFS, precum și deviza instituțională „În serviciul contribuabilului”.",
              },
              {
                n: "06",
                year: "1994",
                color: C.navyL,
                title: "Legea nr.264-XIII / 347-XIII din 1994",
                desc: "Adoptarea legilor privind TVA și accizele — primele reglementări majore ale impozitelor indirecte în Moldova independentă.",
              },
              {
                n: "07",
                year: "2023",
                color: C.gold,
                title: "Ordinele SFS (nr.53/2022, 208/2024 etc.)",
                desc: "Ordine interne ale Serviciului Fiscal privind formulare, proceduri, dări de seamă fiscale și instrucțiuni operaționale pentru inspectori.",
              },
              {
                n: "08",
                year: "2024",
                color: C.red,
                title: "HG nr.250 din 10 apr. 2024",
                desc: "Regulamentul privind organizarea audiențelor publice ale conducerii SFS cu cetățenii și contribuabilii.",
              },
              {
                n: "09",
                year: "2024",
                color: C.navy,
                title: "Tratate internaționale de evitare a dublei impuneri",
                desc: "Moldova are semnate zeci de convenții bilaterale, aplicate de SFS pentru schimbul de informații fiscale cu alte state.",
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
