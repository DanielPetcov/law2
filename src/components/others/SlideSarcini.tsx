import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider, Body, StatBox } from "../ui";

export function SlideSarcini({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
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
        <div>
          <div className="anim anim-sr d1">
            <Tag>Sarcinile Principale · Art. 132 CF</Tag>
          </div>
          <div className="anim anim-sr d2">
            <Heading size={50}>
              Sarcina de{" "}
              <em style={{ color: C.gold, fontStyle: "italic" }}>Bază</em>
            </Heading>
          </div>
          <Divider />
          <div className="anim anim-fu d3">
            <div
              style={{
                padding: "18px 20px",
                background: C.navy,
                borderRadius: 4,
                marginBottom: 16,
              }}
            >
              <Body style={{ color: C.cream, fontSize: 16, lineHeight: 1.7 }}>
                Sarcina de bază a SFS este{" "}
                <strong style={{ color: C.goldL }}>
                  exercitarea controlului asupra respectării legislației fiscale
                </strong>
                , asigurarea calculării corecte, vărsării depline și la timp la
                buget a impozitelor, taxelor și altor plăți.
              </Body>
            </div>
          </div>
          <div className="anim anim-fu d4">
            {[
              [
                "🎯",
                "Conformare voluntară",
                "Stimularea contribuabililor să declare și achite corect obligațiile fiscale de bună voie, prin asistență și informare.",
              ],
              [
                "💰",
                "Colectare venituri",
                "Asigurarea încasărilor la bugetul de stat din impozite directe (pe venit, imobiliar) și indirecte (TVA, accize).",
              ],
              [
                "🚫",
                "Combaterea evaziunii",
                "Identificarea și sancționarea cazurilor de neconformare, fraudă fiscală și activitate economică nedeclarată.",
              ],
              [
                "🔄",
                "Modernizare digitală",
                "Implementarea de sisteme IT (e-Factura, Loteria Fiscală) pentru reducerea economiei informale și eficientizarea colectării.",
              ],
            ].map(([icon, title, desc]) => (
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
        </div>
        <div className="anim anim-sc d3">
          <img src="/sfsagent.jpg" alt="agen sfs" className="rounded-md" />
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
              Indicatori de performanță 2023
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <StatBox
                value="+32.3%"
                label="Creștere impozit venit PF pe bunuri imobile"
                color={C.navy}
              />
              <StatBox
                value="17.5M"
                label="Lei — încasări chirie bunuri imobile (trim. I 2023)"
                color={C.gold}
              />
              <StatBox
                value="113"
                label="Persoane fizice au declarat venituri — acțiuni conformare"
                color={C.navyL}
              />
              <StatBox
                value="85.7M"
                label="Lei venit impozabil declarat în urma acțiunilor SFS"
                color={C.red}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
