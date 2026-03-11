import { C } from "../../lib/common";

import { Chenar, Tag, Heading, Divider } from "../ui";

export function SlideAtributii1({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        height: "100%",
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
          <Tag>Atribuțiile de Bază · Slide 1 / 2</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={46}>
            Funcții &{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Competențe</em>
          </Heading>
        </div>
        <Divider />
        <div className="slide-scroll">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 14,
              marginBottom: 16,
            }}
          >
            {[
              {
                icon: "📊",
                title: "Administrare Fiscală",
                desc: "Colectarea impozitelor, taxelor și altor plăți prevăzute de legislație în interesul bugetului public național.",
                color: C.navy,
              },
              {
                icon: "🔍",
                title: "Control Fiscal",
                desc: "Efectuarea controalelor asupra modului în care contribuabilii respectă legislația fiscală. Include controale documentare și la fața locului.",
                color: C.navyL,
              },
              {
                icon: "📋",
                title: "Înregistrarea Contribuabililor",
                desc: "Atribuirea codului fiscal, ținerea evidenței fiscale, deschiderea și gestionarea dosarelor contribuabililor.",
                color: C.gold,
              },
              {
                icon: "💻",
                title: "Servicii Electronice",
                desc: "„Gestionarea platformelor SIA „Cabinet Personal”, SIA „e-Factura”, SIA „Declarația electronică” și Ghișeul Unic de Raportare.",
                color: C.red,
              },
              {
                icon: "🤝",
                title: "Asistență & Consultanță",
                desc: "Acordarea de informații gratuite contribuabililor, organizarea seminarelor de instruire și ghiduri fiscale accesibile publicului.",
                color: C.navy,
              },
              {
                icon: "🌐",
                title: "Cooperare Internațională",
                desc: "Schimb automat de informații cu alte state, implementarea tratatelor bilaterale, colaborare cu FMI, OCDE și agențiile fiscale europene.",
                color: C.navyL,
              },
            ].map((item, i) => (
              <div className={`anim anim-fu d${i + 3}`} key={item.title}>
                <div
                  className="info-card"
                  style={{
                    padding: "18px 16px",
                    background: C.white,
                    border: `1px solid rgba(180,135,40,.2)`,
                    borderTop: `3px solid ${item.color}`,
                    borderRadius: 4,
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: C.navy,
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lato',sans-serif",
                      fontSize: 13,
                      color: C.muted,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
