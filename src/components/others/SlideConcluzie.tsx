import { C } from "../../lib/common";

import { Chenar, Heading, Tag, Divider, Body } from "../ui";

export function SlideConcluzie({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Chenar />
      {/* background watermark */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.03,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 280,
            fontWeight: 900,
            color: C.navy,
            userSelect: "none",
          }}
        >
          SFS
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 820,
          padding: "0 60px",
        }}
      >
        <div
          className="anim anim-fu d1"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 60,
              height: 2,
              background: `linear-gradient(90deg,transparent,${C.gold},transparent)`,
            }}
          />
        </div>
        <div className="anim anim-fu d2">
          <Tag>Concluzii</Tag>
        </div>
        <div className="anim anim-fu d3">
          <Heading size={58} color={C.navy}>
            Pilonul{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Fiscal</em> al
            Statului
          </Heading>
        </div>
        <Divider />
        <div className="anim anim-fu d4">
          <Body style={{ fontSize: 18, color: C.text }}>
            Serviciul Fiscal de Stat reprezintă una din cele mai importante
            autorități publice ale Republicii Moldova. Prin administrarea
            corectă a impozitelor și taxelor, SFS asigură resursele financiare
            necesare funcționării statului, finanțării serviciilor publice și
            realizării programelor sociale.
          </Body>
        </div>
        <div className="anim anim-fu d5" style={{ marginTop: 24 }}>
          <Body style={{ fontSize: 17, color: C.muted }}>
            Reforma din 2017, digitalizarea serviciilor și cooperarea
            internațională intensă demonstrează angajamentul SFS față de
            modernizare și integrare europeană.
          </Body>
        </div>
        <div
          className="anim anim-fu d6"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginTop: 28,
          }}
        >
          {[
            "Transparență",
            "Conformare voluntară",
            "Modernizare digitală",
            "Cooperare internațională",
            "Stat de drept",
            "Serviciu public",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 11,
                letterSpacing: 1,
                color: C.gold,
                border: `1px solid rgba(180,135,40,.3)`,
                padding: "6px 14px",
                borderRadius: 2,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="anim anim-fu d7"
          style={{
            marginTop: 32,
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 20,
            fontStyle: "italic",
            color: C.muted,
          }}
        >
          "Împreună construim o societate prosperă și onestă." — viziunea
          Serviciului Fiscal de Stat
        </div>
      </div>
    </div>
  );
}
