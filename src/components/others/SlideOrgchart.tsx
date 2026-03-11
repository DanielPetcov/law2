import { C } from "../../lib/common";

import { Chenar, Divider, Tag, Heading, OrgChart } from "../ui";

export function SlideOrgchart({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        paddingTop: 16,
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
          <Tag>Structura Organizatorică</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={44}>
            Organigrama{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>SFS</em>
          </Heading>
        </div>
        <Divider />
        <div className="anim anim-sc d3" style={{ overflowX: "auto" }}>
          <OrgChart />
        </div>
        <div
          className="anim anim-fu d4"
          style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap" }}
        >
          {[
            [C.navy, "Director / Directoare"],
            [C.navyL, "Directori Adjuncți"],
            [C.gold, "Direcții Generale"],
            [C.red, "Direcții Specializate"],
          ].map(([c, l]) => (
            <div
              key={l}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Lato',sans-serif",
                fontSize: 12,
                color: C.text,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  background: c,
                  borderRadius: 2,
                }}
              />
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
