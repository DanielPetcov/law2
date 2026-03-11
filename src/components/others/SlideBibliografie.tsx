import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider } from "../ui";

export function SlideBibliografie({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  const refs = [
    {
      n: "1",
      text: "Constituția Republicii Moldova, adoptată la 29 iulie 1994, Monitorul Oficial nr.1 din 12.08.1994.",
    },
    {
      n: "2",
      text: "Codul Fiscal al Republicii Moldova, Titlul V — Administrarea fiscală, art. 131–158. (Legea nr.1163-XIII din 24.04.1997).",
    },
    {
      n: "3",
      text: "Legea nr.876-XII din 22 ianuarie 1992 cu privire la Serviciul Fiscal de Stat. Monitorul Oficial al RM.",
    },
    {
      n: "4",
      text: "Legea nr.281 din 16.12.2016 privind modificarea Codului Fiscal — reforma SFS ca persoană juridică unică.",
    },
    {
      n: "5",
      text: "Hotărârea Guvernului nr.395 din 12 mai 2017 — Regulamentul de organizare și funcționare a Serviciului Fiscal de Stat.",
    },
    {
      n: "6",
      text: "Hotărârea Guvernului nr.500 din 1 iulie 2014 — Stema, drapelul și culoarea corporativă a SFS.",
    },
    {
      n: "7",
      text: "Hotărârea Guvernului nr.250 din 10 aprilie 2024 — Regulamentul privind organizarea audiențelor publice SFS.",
    },
    {
      n: "8",
      text: "Serviciul Fiscal de Stat — Pagina oficială: www.sfs.md. Accesat în octombrie 2024.",
    },
    {
      n: "9",
      text: "Serviciul Fiscal de Stat — Secțiunea 'Istoria SFS': https://sfs.md/ro/istoria-sfs. Accesat în octombrie 2024.",
    },
    {
      n: "10",
      text: "Serviciul Fiscal de Stat — Conducerea: https://sfs.md/ro/conducere. Accesat în octombrie 2024.",
    },
    {
      n: "11",
      text: "Serviciul Fiscal de Stat — Contacte și audiențe: https://sfs.md/ro/pagina/contacte. Accesat în octombrie 2024.",
    },
    {
      n: "12",
      text: "MOLDPRES — 'Olga Golban numită director SFS', 21 februarie 2024. www.moldpres.md.",
    },
    {
      n: "13",
      text: "Legis.md — HG nr.395/2017, text integral: https://www.legis.md/cautare/getResults?doc_id=123451",
    },
    {
      n: "14",
      text: "Lege.md — Codul Fiscal, Art. 132–153: https://lege.md/cod_fiscal/art-8",
    },
  ];
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
          <Tag>Surse & Referințe</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={46}>
            <em style={{ color: C.gold, fontStyle: "italic" }}>Bibliografie</em>
          </Heading>
        </div>
        <Divider />
        <div
          className="slide-scroll"
          style={{ maxHeight: "calc(100vh - 220px)" }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            {refs.map((r, i) => (
              <div
                className={`anim anim-fu d${Math.min(i + 2, 8)}`}
                key={r.n}
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "10px 14px",
                  background: C.white,
                  border: `1px solid rgba(180,135,40,.15)`,
                  borderLeft: `3px solid ${i % 3 === 0 ? C.navy : i % 3 === 1 ? C.gold : C.red}`,
                  borderRadius: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 11,
                    color: C.gold,
                    fontWeight: 700,
                    flexShrink: 0,
                    minWidth: 18,
                  }}
                >
                  [{r.n}]
                </span>
                <span
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontSize: 13,
                    color: C.text,
                    lineHeight: 1.55,
                  }}
                >
                  {r.text}
                </span>
              </div>
            ))}
          </div>
          <div
            className="anim anim-fu d8"
            style={{
              marginTop: 16,
              padding: "14px 18px",
              background: C.cream2,
              border: `1px solid rgba(180,135,40,.2)`,
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Lato',sans-serif",
                fontSize: 13,
                color: C.muted,
              }}
            >
              Prezentare realizată de{" "}
              <strong style={{ color: C.navy }}>Cristina Abagică</strong> · 2024
              · Material academic — drept public
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
