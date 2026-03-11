import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider, Body, FactRow } from "../ui";

export function SlideConducere({ active }: { active: boolean }) {
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
        }}
      >
        <div className="anim anim-sr d1">
          <Tag>Conducerea Instituției</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={50}>
            Echipa de{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Conducere</em>
          </Heading>
        </div>
        <Divider />
        <div
          style={{
            gap: 40,
            alignItems: "start",
          }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]"
        >
          {/* Director */}
          <div>
            <div className="anim anim-fu d3">
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "20px 24px",
                  background: C.white,
                  border: `2px solid ${C.navy}`,
                  borderRadius: 6,
                  marginBottom: 16,
                }}
                className="flex-col lg:flex-row lg:flex-start"
              >
                <img
                  src="/olga.jpg"
                  alt="Olga Golban"
                  className="max-h-100 rounded-md object-contain w-fit lg:w-auto mx-auto"
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 26,
                      fontWeight: 700,
                      color: C.navy,
                    }}
                  >
                    Olga GOLBAN
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: 10,
                      color: C.gold,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      margin: "4px 0 10px",
                    }}
                  >
                    Directoare · din 28 feb. 2024
                  </div>
                  <Body style={{ fontSize: 13 }}>
                    Numită Directoare a Serviciului Fiscal de Stat prin decizia
                    Guvernului din 21 feb. 2024, cu aplicare din 28 feb. 2024.
                    Are experiență în administrația fiscală din 2007 și a
                    deținut funcții de conducere importante în cadrul SFS și
                    Ministerului Finanțelor.
                  </Body>
                </div>
              </div>
            </div>

            {/* Directori Adjuncți */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                { name: "Petru GRICIUC", role: "Director Adjunct" },
                { name: "Iuri LICHII", role: "Director Adjunct" },
                { name: "Sergiu CHIRCU", role: "Director Adjunct" },
                { name: "Serghei ARHIRII", role: "Director Adjunct interimar" },
              ].map((p, i) => (
                <div className={`anim anim-fu d${i + 4}`} key={p.name}>
                  <div
                    className="info-card"
                    style={{
                      padding: "14px 16px",
                      background: C.cream2,
                      border: `1px solid rgba(180,135,40,.25)`,
                      borderLeft: `3px solid ${C.navyL}`,
                      borderRadius: 3,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Lato',sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: C.navy,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: 10,
                        color: C.muted,
                        letterSpacing: 1,
                        marginTop: 2,
                      }}
                    >
                      {p.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Baza legală */}
          <div className="anim anim-sc d3">
            <div
              style={{
                padding: "22px 24px",
                background: C.white,
                border: `1px solid rgba(180,135,40,.2)`,
                borderRadius: 6,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: C.navy,
                  marginBottom: 14,
                }}
              >
                Baza legală a conducerii
              </div>
              {[
                [
                  "Art. 132‑3 Cod Fiscal",
                  "Conducerea SFS este asigurată de Director, numit de Guvern la propunerea Ministrului Finanțelor.",
                ],
                [
                  "HG 395/2017 pct. 21‑22",
                  "Directorul reprezintă SFS față de terți și poate acorda împuterniciri angajaților.",
                ],
                [
                  "Atribuții Director",
                  "Coordonează activitatea generală a SFS și ia decizii organizatorice interne.",
                ],
                [
                  "Directori adjuncți",
                  "Funcțiile lor sunt stabilite prin ordin intern, în baza necesităților structurale.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  style={{
                    marginBottom: 12,
                    paddingBottom: 12,
                    borderBottom: `1px solid rgba(180,135,40,.12)`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Lato',sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: C.navy,
                      marginBottom: 3,
                    }}
                  >
                    {t}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lato',sans-serif",
                      fontSize: 13,
                      color: C.muted,
                      lineHeight: 1.55,
                    }}
                  >
                    {d}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 14 }}>
              <FactRow icon="📅">
                Audiențe conform regulilor aprobate prin HG nr.250/2024 — în a
                treia vineri a lunii, orele 14:00–17:00, la sediul SFS.
              </FactRow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
