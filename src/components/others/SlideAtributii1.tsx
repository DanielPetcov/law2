import { C } from "../../lib/common";
import { Chenar, Tag, Heading, Divider } from "../ui";

export function SlideAtributii1({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";

  const items = [
    {
      icon: "📊",
      title: "Administrarea Obligațiilor Fiscale",
      desc: "Colectarea impozitelor, taxelor și altor plăți prevăzute de legislația fiscală, asigurând acumularea veniturilor la bugetul public național.",
      color: C.navy,
    },
    {
      icon: "🔍",
      title: "Control Fiscal",
      desc: "Verificarea modului în care contribuabilii respectă legislația fiscală prin controale documentare și controale la fața locului.",
      color: C.navyL,
    },
    {
      icon: "📋",
      title: "Înregistrarea Contribuabililor",
      desc: "Atribuirea codului fiscal, evidența contribuabililor și administrarea dosarelor fiscale ale persoanelor fizice și juridice.",
      color: C.gold,
    },
    {
      icon: "💻",
      title: "Servicii Electronice",
      desc: "Administrarea sistemelor informaționale precum SIA „Cabinetul Personal”, „Declarația electronică”, „e-Factura” și Ghișeul Unic de Raportare.",
      color: C.red,
    },
    {
      icon: "🤝",
      title: "Asistență pentru Contribuabili",
      desc: "Oferirea de informații și consultanță fiscală, organizarea seminarelor și publicarea ghidurilor pentru contribuabili.",
      color: C.navy,
    },
    {
      icon: "🌐",
      title: "Cooperare Internațională",
      desc: "Schimb de informații fiscale cu alte state și colaborarea cu organizații internaționale precum FMI, OCDE și instituții fiscale europene.",
      color: C.navyL,
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
          <Tag>Atribuțiile de Bază · Slide 1 / 2</Tag>
        </div>

        <div className="anim anim-sr d2">
          <Heading size={46}>
            Funcții &{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Competențe</em>
          </Heading>
        </div>

        <Divider />

        {/* NEW INTRO PARAGRAPH */}
        <div className="anim anim-fu d2">
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: C.muted,
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            Serviciul Fiscal de Stat are rolul principal de a administra
            sistemul fiscal al Republicii Moldova. Prin activitățile sale,
            instituția asigură colectarea veniturilor bugetare, controlul
            respectării legislației fiscale și oferirea de servicii moderne
            contribuabililor. Atribuțiile sale includ atât activități de
            administrare și control fiscal, cât și dezvoltarea serviciilor
            electronice și cooperarea internațională în domeniul fiscal.
          </p>
        </div>

        <div className="">
          <div
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{
              gap: 14,
              marginBottom: 16,
            }}
          >
            {items.map((item, i) => (
              <div className={`anim anim-fu d${i + 3}`} key={item.title}>
                <div
                  className="info-card h-full"
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
                      fontFamily: "'Cormorant Garamond', serif",
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
                      fontFamily: "'Lato', sans-serif",
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
