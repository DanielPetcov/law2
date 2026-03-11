import { Chenar } from "../ui/chenar";
import { ImgPlaceholder } from "../ui/imgPlaceHolder";
import { Tag } from "../ui/tag";
import { Heading } from "../ui/heading";
import { Divider } from "../ui/divider";

import { C } from "../../lib/common";

export function SlideCover({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Chenar />
      {/* Flag stripe right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 8,
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <div style={{ flex: 1, background: C.navy }} />
        <div style={{ flex: 1, background: "#F5D020" }} />
        <div style={{ flex: 1, background: C.red }} />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 780,
          padding: "0 60px",
        }}
      >
        <div
          className="anim anim-fi d1 flex justify-center"
          style={{ marginBottom: 20 }}
        >
          {/* <ImgPlaceholder
            label="Logo SFS / Stema Republicii Moldova"
            height={90}
          /> */}
          <img
            src="/logo-fisc.png"
            className="max-h-40 lg:max-h-45 2xl:max-h-75"
          />
        </div>
        <Tag color={C.gold}>Prezentare Academică · Drept Public · 2026</Tag>
        <div className="anim anim-fu d2">
          <Heading size={68} color={C.navy}>
            Serviciul Fiscal
          </Heading>
          <Heading size={68} italic color={C.gold}>
            de Stat
          </Heading>
          <Heading size={36} color={C.red}>
            al Republicii Moldova
          </Heading>
        </div>
        <Divider />
        <div
          className="anim anim-fu d4"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginTop: 12,
          }}
        >
          {[
            ["Autor", "Cristina Abagică"],
            ["Instituție", "SFS Moldova"],
            ["An", "2026"],
          ].map(([l, v]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 10,
                  letterSpacing: 3,
                  color: C.muted,
                  textTransform: "uppercase",
                }}
              >
                {l}
              </div>
              <div
                style={{
                  fontFamily: "'Lato',sans-serif",
                  fontSize: 15,
                  color: C.navy,
                  fontWeight: 700,
                  marginTop: 3,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
