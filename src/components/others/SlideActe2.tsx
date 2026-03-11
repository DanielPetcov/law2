import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider, ActCard } from "../ui";

export function SlideActe2({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
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
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
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
                year: "2023",
                color: C.gold,
                title: "Ordinele SFS (nr.53/2022, 208/2024 etc.)",
                desc: "Ordine interne ale Serviciului Fiscal privind formulare, proceduri, dări de seamă fiscale și instrucțiuni operaționale pentru inspectori.",
              },
              {
                n: "07",
                year: "2024",
                color: C.red,
                title: "HG nr.250 din 10 apr. 2024",
                desc: "Regulamentul privind organizarea audiențelor publice ale conducerii SFS cu cetățenii și contribuabilii.",
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
