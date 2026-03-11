import { C } from "../../lib/common";

import { Chenar, Divider, Tag, Heading, OrgChart } from "../ui";

export function SlideOrgchart({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={`${cls} relative flex flex-col justify-center items-center`}
      style={{ minHeight: "100%", paddingTop: 16, paddingBottom: 24 }}
    >
      <Chenar />

      <div className="relative z-10 w-full max-w-275 mx-auto px-4 lg:px-18">
        {/* Header */}
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

        {/* Chart wrapper — scrollable on mobile, centered on desktop */}
        <div className="anim anim-sc d3 w-full overflow-x-auto pb-2">
          {/* scroll hint visible only on small screens */}
          <p className="block lg:hidden text-xs text-center mb-2 text-[#5A5A7A] font-mono tracking-widest uppercase">
            ← derulați pentru a vedea →
          </p>
          {/* min-w forces the chart to not squish; outer div scrolls */}
          <div className="min-w-160 lg:min-w-0">
            <OrgChart />
          </div>
        </div>

        {/* Legend */}
        <div className="anim anim-fu d4 flex flex-wrap gap-x-4 gap-y-2 mt-3">
          {[
            [C.navy, "Director / Directoare"],
            [C.navyL, "Directori Adjuncți"],
            [C.gold, "Direcții Generale"],
            [C.red, "Direcții Specializate"],
          ].map(([c, l]) => (
            <div
              key={l as string}
              className="flex items-center gap-1.5 text-xs"
              style={{ fontFamily: "'Lato',sans-serif", color: C.text }}
            >
              <div
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ background: c as string }}
              />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
