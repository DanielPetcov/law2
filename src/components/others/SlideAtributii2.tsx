import { C } from "../../lib/common";
import { Chenar, Tag, Heading, Divider } from "../ui";

export function SlideAtributii2({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";

  const rights = [
    "Efectuează controale fiscale la contribuabili și alte persoane conform prevederilor Codului Fiscal.",
    "Solicită și primește gratuit informații, date și documente de la persoane fizice și juridice necesare administrării fiscale.",
    "Efectuează vizite fiscale la sediul contribuabililor pentru verificarea respectării legislației fiscale.",
    "Examinează și poate sigila încăperi de producție, depozite sau spații comerciale în cadrul controlului fiscal.",
    "Are acces la evidența contabilă și la sistemele informatice utilizate pentru înregistrarea operațiunilor economice.",
    "Aplică măsuri de executare silită și instituie sechestru asupra bunurilor pentru recuperarea obligațiilor fiscale neachitate.",
    "Constată contravenții și transmite materialele către organele competente în cazul infracțiunilor fiscale.",
    "Emite soluții fiscale individuale anticipate (SFIA) pentru clarificarea modului de aplicare a legislației fiscale.",
    "Confirmă rezidența fiscală a contribuabililor pentru aplicarea convențiilor internaționale de evitare a dublei impuneri.",
    "Cooperează cu instituții fiscale din alte state și cu organizații internaționale (FMI, OCDE, administrații fiscale europene).",
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
          <Tag>Atribuțiile de Bază · Slide 2 / 2</Tag>
        </div>

        <div className="anim anim-sr d2">
          <Heading size={46}>
            Drepturi Legale{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Art. 134 CF</em>
          </Heading>
        </div>

        <Divider />

        {/* Intro paragraph */}
        <div className="anim anim-fu d2">
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: C.muted,
              maxWidth: 820,
              marginBottom: 22,
            }}
          >
            În vederea realizării atribuțiilor sale, Serviciul Fiscal de Stat
            dispune de un set de drepturi prevăzute în Codul Fiscal al
            Republicii Moldova. Aceste drepturi permit instituției să exercite
            controlul fiscal, să colecteze informațiile necesare administrării
            obligațiilor fiscale și să aplice măsuri legale pentru asigurarea
            respectării legislației fiscale și acumulării veniturilor la bugetul
            public național.
          </p>
        </div>

        <div className="">
          <div style={{ gap: 12 }} className="grid grid-cols-1 lg:grid-cols-2">
            {rights.map((text, i) => (
              <div className={`anim anim-fu d${Math.min(i + 2, 8)}`} key={i}>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 16px",
                    background: C.white,
                    border: `1px solid rgba(180,135,40,.18)`,
                    borderLeft: `3px solid ${i % 2 === 0 ? C.navy : C.gold}`,
                    borderRadius: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: C.gold,
                      flexShrink: 0,
                      fontWeight: 700,
                      minWidth: 22,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 14,
                      color: C.text,
                      lineHeight: 1.6,
                    }}
                  >
                    {text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
