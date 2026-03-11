import { Chenar, Divider, Tag, Heading, Body, StatBox, FactRow } from "../ui";
import { C } from "../../lib/common";

export function SlideIntro({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";

  return (
    <div
      className={cls}
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        paddingTop: 24,
        paddingBottom: 32,
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
          alignItems: "center",
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-13"
      >
        {/* LEFT SIDE */}
        <div>
          <div className="anim anim-sr d1">
            <Tag>Introducere Generală</Tag>
          </div>

          <div className="anim anim-sr d2">
            <Heading size={54}>
              Ce este{" "}
              <em style={{ color: C.gold, fontStyle: "italic" }}>SFS?</em>
            </Heading>
          </div>

          <Divider />

          <div className="anim anim-fu d3">
            <Body>
              Serviciul Fiscal de Stat (SFS) este autoritatea publică centrală
              din Republica Moldova, subordonată Ministerului Finanțelor,
              împuternicită să administreze impozitele, taxele și alte plăți în
              interesul statului și al cetățenilor.
            </Body>
          </div>

          <div className="anim anim-fu d4" style={{ marginTop: 18 }}>
            <Body>
              Viziunea instituției:{" "}
              <strong style={{ color: C.navy }}>
                „Împreună construim o societate prosperă și onestă.”
              </strong>
            </Body>
          </div>

          {/* NEW ROLE SECTION */}
          <div className="anim anim-fu d5" style={{ marginTop: 18 }}>
            <Body>Rolul instituției:</Body>

            <ul
              style={{
                marginTop: 6,
                paddingLeft: 18,
                fontFamily: "'Lato', sans-serif",
                fontSize: 15,
                color: C.muted,
                lineHeight: 1.7,
              }}
            >
              <li>administrarea sistemului fiscal al statului</li>
              <li>
                asigurarea colectării veniturilor la bugetul public național
              </li>
              <li>monitorizarea respectării legislației fiscale</li>
            </ul>
          </div>

          {/* STATS */}
          <div
            className="anim anim-fu d6"
            style={{
              marginTop: 20,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <StatBox
              value="1992"
              label="Originea Serviciului Fiscal"
              color={C.navy}
            />

            <StatBox
              value="SFS"
              label="Serviciul Fiscal de Stat"
              color={C.gold}
            />

            <StatBox value="~2400" label="Angajați în sistem" color={C.navyL} />

            <StatBox
              value="Chișinău"
              label="Sediu central, str. C. Tănase 9"
              color={C.red}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="anim anim-sc d3">
            <img
              src="/fisc-afara.jpg"
              alt="Sediul Serviciului Fiscal de Stat"
              style={{
                width: "100%",
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
          </div>

          <div className="anim anim-fu d5" style={{ marginTop: 16 }}>
            <FactRow icon="🏛️">
              Subordonat <strong>Ministerului Finanțelor</strong> al Republicii
              Moldova
            </FactRow>

            <FactRow icon="📍">
              str. Constantin Tănase nr. 9, mun. Chișinău, MD-2005
            </FactRow>

            <FactRow icon="📞">
              Linia verde: <strong>0 8000 1525</strong> · Email: mail@sfs.md
            </FactRow>
          </div>
        </div>
      </div>
    </div>
  );
}
