import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider, Body, StatBox, FactRow } from "../ui";

export function SlidePersonal({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";

  const roles = [
    [
      "Selectare și încadrare",
      "Funcționarii fiscali sunt selectați prin concurs public și se încadrează în serviciu pe baza criteriilor de competență profesională, integritate și pregătire de specialitate.",
    ],
    [
      "Grade de calificare",
      "Funcționarii fiscali dețin grade de calificare (consilier fiscal, consilier de stat fiscal, consilier de stat superior etc.), acordate în funcție de experiență, performanță profesională și vechime în serviciu.",
    ],
    [
      "Obligații profesionale",
      "Funcționarii sunt obligați să respecte legislația fiscală, să trateze contribuabilii corect și imparțial, să păstreze secretul fiscal și să evite orice conflict de interese.",
    ],
    [
      "Protecție și drepturi",
      "Funcționarii fiscali beneficiază de protecție juridică în exercitarea atribuțiilor, precum și de drepturi sociale și garanții prevăzute de legislație.",
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
        }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {/* LEFT COLUMN */}
        <div>
          <div className="anim anim-sr d1">
            <Tag>Personalul SFS · Art. 148–153 Cod Fiscal</Tag>
          </div>

          <div className="anim anim-sr d2">
            <Heading size={50}>
              <em style={{ color: C.gold, fontStyle: "italic" }}>
                Funcționarii
              </em>
              <br />
              Fiscali
            </Heading>
          </div>

          <Divider />

          <div className="anim anim-fu d3">
            <Body>
              Personalul Serviciului Fiscal de Stat este format din funcționari
              fiscali de stat — funcționari publici care exercită atribuțiile de
              administrare fiscală. Statutul, drepturile și obligațiile acestora
              sunt reglementate prin Titlul V al Codului Fiscal (art. 148–153).
            </Body>
          </div>

          <div className="anim anim-fu d4" style={{ marginTop: 16 }}>
            {roles.map(([title, desc]) => (
              <div
                key={title}
                style={{
                  marginBottom: 10,
                  padding: "12px 16px",
                  background: C.white,
                  border: `1px solid rgba(180,135,40,.18)`,
                  borderLeft: `3px solid ${C.gold}`,
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
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
                    lineHeight: 1.55,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="anim anim-sc d3">
            <img
              src="/agentlucrator.jpg"
              alt="Funcționar fiscal în activitate"
              className="rounded-md"
            />
          </div>

          <div
            className="anim anim-fu d4"
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <StatBox
              value="~2400"
              label="Număr aproximativ de angajați în cadrul SFS"
              color={C.navy}
            />

            <StatBox
              value="Concurs"
              label="Angajare prin concurs public"
              color={C.gold}
            />

            <StatBox
              value="1 Iulie"
              label="Ziua profesională a funcționarului fiscal"
              color={C.navyL}
            />

            <StatBox
              value="1990"
              label="Anul constituirii sistemului fiscal modern"
              color={C.red}
            />
          </div>

          <div className="anim anim-fu d5" style={{ marginTop: 14 }}>
            <FactRow icon="🎓">
              Funcționarii fiscali participă periodic la programe de instruire
              și perfecționare profesională organizate inclusiv cu sprijinul
              FMI, OCDE și altor organizații internaționale.
            </FactRow>

            <FactRow icon="🔒">
              Secretul fiscal reprezintă o obligație legală: funcționarii nu pot
              divulga informații despre contribuabili fără temei legal.
            </FactRow>
          </div>
        </div>
      </div>
    </div>
  );
}
