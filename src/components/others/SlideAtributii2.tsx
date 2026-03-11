import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider } from "../ui";

export function SlideAtributii2({ active }: { active: boolean }) {
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
          <Tag>Atribuțiile de Bază · Slide 2 / 2</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={46}>
            Drepturi Legale{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Art. 134 CF</em>
          </Heading>
        </div>
        <Divider />
        <div className="slide-scroll">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {[
              "Efectuează controale fiscale la contribuabili și persoane terțe conform Codului Fiscal",
              "Solicită și primește gratuit informații, date, documente de la orice persoană fizică sau juridică",
              "Efectuează vizite fiscale la sediul contribuabililor pentru verificarea legalității activităților",
              "Deschide, examinează și sigilează încăperi de producție, depozite, spații comerciale",
              "Accesează sistemele electronice de evidență contabilă ale contribuabililor",
              "Sechestrează bunuri, aplică sancțiuni și execută silit obligațiile fiscale neachitate",
              "Constată și instrumentează infracțiuni și contravenții în domeniul fiscal",
              "Emite soluții fiscale individuale anticipate pentru contribuabili (SFIA)",
              "Confirmă rezidența fiscală a contribuabililor în scopul aplicării convențiilor internaționale",
              "Cooperează cu instituțiile similare din alte state și cu organisme internaționale (FMI, OCDE)",
            ].map((text, i) => (
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
                    marginBottom: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono',monospace",
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
                      fontFamily: "'Lato',sans-serif",
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
