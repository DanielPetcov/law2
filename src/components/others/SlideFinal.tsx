import { C } from "../../lib/common";
import { Chenar, Tag, Heading } from "../ui";

export function SlideFinal({ active }: { active: boolean }) {
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
        textAlign: "center",
      }}
    >
      <Chenar />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 72px",
        }}
      >
        <div className="anim anim-sr d1">
          <Tag>Prezentare finalizată</Tag>
        </div>

        <div className="anim anim-sr d2">
          <Heading size={56}>
            <em style={{ color: C.gold, fontStyle: "italic" }}>Vă mulțumesc</em>
            <br />
            pentru atenție!
          </Heading>
        </div>

        <div
          className="anim anim-fu d3"
          style={{
            marginTop: 20,
            fontFamily: "'Lato', sans-serif",
            fontSize: 16,
            color: C.muted,
            lineHeight: 1.7,
          }}
        >
          Prezentare realizată în cadrul disciplinei <br />
          <strong style={{ color: C.navy }}>Drept Administrativ</strong>
        </div>

        <div
          className="anim anim-fu d4"
          style={{
            marginTop: 28,
            fontFamily: "'Lato', sans-serif",
            fontSize: 14,
            color: C.muted,
          }}
        >
          Cristina Abagică · 2026
        </div>
      </div>
    </div>
  );
}
