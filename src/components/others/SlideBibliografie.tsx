import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider } from "../ui";

export function SlideBibliografie({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  const refs = [
    {
      n: "1",
      text: "Constituția Republicii Moldova, adoptată la 29 iulie 1994, Monitorul Oficial al Republicii Moldova nr.1 din 12.08.1994.",
    },
    {
      n: "2",
      text: "Codul Fiscal al Republicii Moldova, Legea nr.1163-XIII din 24.04.1997, Titlul V – Administrarea fiscală (art. 131–158).",
    },
    {
      n: "3",
      text: "Legea nr.876-XII din 22 ianuarie 1992 cu privire la Serviciul Fiscal de Stat.",
    },
    {
      n: "4",
      text: "Legea nr.281 din 16 decembrie 2016 privind modificarea Codului Fiscal și reorganizarea Serviciului Fiscal de Stat.",
    },
    {
      n: "5",
      text: "Hotărârea Guvernului nr.395 din 05 iunie 2017 privind organizarea și funcționarea Serviciului Fiscal de Stat.",
    },
    {
      n: "6",
      text: "Hotărârea Guvernului nr.500 din 01 iulie 2014 privind aprobarea simbolicii Serviciului Fiscal de Stat.",
    },
    {
      n: "7",
      text: "Hotărârea Guvernului nr.250 din 10 aprilie 2024 privind organizarea audiențelor publice în cadrul Serviciului Fiscal de Stat.",
    },
    {
      n: "8",
      text: "Serviciul Fiscal de Stat — pagina oficială: https://sfs.md. Accesat în 2026.",
    },
    {
      n: "9",
      text: "Serviciul Fiscal de Stat — Istoria instituției: https://sfs.md/ro/istoria-sfs. Accesat în 2026.",
    },
    {
      n: "10",
      text: "Serviciul Fiscal de Stat — Conducerea instituției: https://sfs.md/ro/conducere. Accesat în 2026.",
    },
    {
      n: "11",
      text: "Serviciul Fiscal de Stat — Contacte și audiențe: https://sfs.md/ro/pagina/contacte. Accesat în 2026.",
    },
    {
      n: "12",
      text: "Ministerul Finanțelor al Republicii Moldova — material informativ privind Serviciul Fiscal de Stat. https://www.mf.gov.md/ro/download/file/fid/35515?language=ru",
    },
    {
      n: "13",
      text: "Legis.md — Hotărârea Guvernului nr.395/2017 privind organizarea și funcționarea Serviciului Fiscal de Stat.",
    },
    {
      n: "14",
      text: "Portal legislativ — Codul Fiscal al Republicii Moldova (art. 131–153).",
    },
  ];
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
          <Tag>Surse & Referințe</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={46}>
            <em style={{ color: C.gold, fontStyle: "italic" }}>Bibliografie</em>
          </Heading>
        </div>
        <Divider />
        <div className="" style={{ maxHeight: "calc(100vh - 220px)" }}>
          <div style={{ gap: 10 }} className="grid grid-cols-1 lg:grid-cols-2">
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
              <strong style={{ color: C.navy }}>Cristina Abagică</strong> · 2026
              · Material academic — drept administrativ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
