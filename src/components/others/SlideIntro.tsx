import { Chenar, Divider, Tag, Heading, Body, StatBox, FactRow } from "../ui";

import { C } from "../../lib/common";

export function SlideIntro({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        minHeight: "100%", // ← minHeight not height, allows growth
        display: "flex",
        alignItems: "flex-start", // ← was "center", that was the culprit
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
          <div className="anim anim-fu d4" style={{ marginTop: 20 }}>
            <Body>
              Deviza instituției:{" "}
              <strong style={{ color: C.navy }}>
                "În serviciul contribuabilului"
              </strong>
            </Body>
          </div>
          <div
            className="anim anim-fu d5"
            style={{
              marginTop: 20,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <StatBox
              value="1992"
              label="Fondată prin Legea nr.876-XII"
              color={C.navy}
            />
            <StatBox value="SFS" label="Abreviere oficială" color={C.gold} />
            <StatBox value="~2400" label="Angajați în sistem" color={C.navyL} />
            <StatBox
              value="Chișinău"
              label="Sediu central, str. A. Pușkin 26"
              color={C.red}
            />
          </div>
        </div>
        <div>
          <div className="anim anim-sc d3">
            {/* <ImgPlaceholder label="Sediul central SFS, Chișinău" height={240} /> */}
            <img src="/fisc-afara.jpg" alt="" style={{ maxHeight: 300 }} />
          </div>
          <div className="anim anim-fu d5" style={{ marginTop: 16 }}>
            <FactRow icon="🏛️">
              Subordonat <strong>Ministerului Finanțelor</strong> al Republicii
              Moldova
            </FactRow>
            <FactRow icon="📍">
              Sediu: MD-2005, mun. Chișinău, str. Alexandru Pușkin 26
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
