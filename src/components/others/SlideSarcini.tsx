import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider, Body, StatBox } from "../ui";

export function SlideSarcini({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";

  const tasks = [
    [
      "🎯",
      "Conformare voluntară",
      "Stimularea contribuabililor să declare și să achite corect obligațiile fiscale prin informare, ghiduri fiscale și servicii de asistență.",
    ],
    [
      "💰",
      "Colectarea veniturilor bugetare",
      "Asigurarea acumulării veniturilor la bugetul public național din impozite directe (impozitul pe venit, impozitul pe bunuri imobile) și indirecte (TVA, accize).",
    ],
    [
      "🚫",
      "Combaterea evaziunii fiscale",
      "Identificarea și sancționarea cazurilor de fraudă fiscală, activitate economică nedeclarată și alte forme de neconformare fiscală.",
    ],
    [
      "🔄",
      "Modernizare și digitalizare",
      "Implementarea sistemelor informaționale precum e-Factura, Declarația electronică și alte servicii digitale pentru eficientizarea administrării fiscale.",
    ],
  ];

  return (
    <div
      className={cls}
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
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
          gap: 52,
          alignItems: "start",
        }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {/* LEFT COLUMN */}
        <div>
          <div className="anim anim-sr d1">
            <Tag>Sarcinile Principale · Art. 132 Cod Fiscal</Tag>
          </div>

          <div className="anim anim-sr d2">
            <Heading size={50}>
              Sarcina de{" "}
              <em style={{ color: C.gold, fontStyle: "italic" }}>Bază</em>
            </Heading>
          </div>

          <Divider />

          {/* Context paragraph */}
          <div className="anim anim-fu d3">
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 16,
                color: C.muted,
                lineHeight: 1.7,
                marginBottom: 18,
              }}
            >
              Serviciul Fiscal de Stat are rolul de a asigura administrarea
              eficientă a sistemului fiscal al Republicii Moldova. Prin
              activitățile sale de control, administrare și asistență pentru
              contribuabili, instituția contribuie la acumularea veniturilor la
              bugetul public național și la menținerea disciplinei fiscale în
              economie.
            </p>
          </div>

          <div className="anim anim-fu d4">
            <div
              style={{
                padding: "18px 20px",
                background: C.navy,
                borderRadius: 4,
                marginBottom: 16,
              }}
            >
              <Body style={{ color: C.cream, fontSize: 16, lineHeight: 1.7 }}>
                Sarcina principală a SFS este{" "}
                <strong style={{ color: C.goldL }}>
                  exercitarea controlului asupra respectării legislației fiscale
                </strong>
                , precum și asigurarea calculării corecte, achitării integrale
                și la timp a impozitelor, taxelor și altor plăți la bugetul
                public național.
              </Body>
            </div>
          </div>

          {tasks.map(([icon, title, desc]) => (
            <div
              key={title}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 12,
                padding: "14px 16px",
                background: C.cream2,
                border: `1px solid rgba(180,135,40,.2)`,
                borderRadius: 3,
              }}
            >
              <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>

              <div>
                <div
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: C.navy,
                    marginBottom: 4,
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontSize: 13,
                    color: C.muted,
                    lineHeight: 1.5,
                  }}
                >
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="anim anim-sc d3">
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 20,
              fontWeight: 700,
              color: C.navy,
              marginBottom: 10,
            }}
          >
            Activitatea Serviciului Fiscal de Stat
          </div>

          <img src="/sfsagent.jpg" alt="Agent SFS" className="rounded-md" />

          <div style={{ marginTop: 20 }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 22,
                fontWeight: 700,
                color: C.navy,
                marginBottom: 14,
              }}
            >
              Indicatori de performanță · 2024
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <StatBox
                value="71.5B"
                label="Lei — venituri colectate la Bugetul Public Național"
                color={C.navy}
              />

              <StatBox
                value="+11.7%"
                label="Creștere a încasărilor față de anul 2023"
                color={C.gold}
              />

              <StatBox
                value="305K"
                label="Declarații privind impozitul pe venit depuse"
                color={C.navyL}
              />

              <StatBox
                value="64B"
                label="Lei colectați în primele 11 luni ale anului"
                color={C.red}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
