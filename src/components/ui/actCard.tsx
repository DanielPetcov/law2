import { C } from "../../lib/common";

export function ActCard({
  number,
  title,
  year,
  desc,
  color = C.navy,
}: {
  number?: number;
  title: string;
  year: string;
  desc: string;
  color: string;
}) {
  return (
    <div
      className="info-card"
      style={{
        padding: "20px 22px",
        background: C.white,
        border: `1px solid rgba(180,135,40,.2)`,
        borderLeft: `4px solid ${color}`,
        borderRadius: 4,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            color: C.muted,
            letterSpacing: 2,
          }}
        >
          {number}
        </span>
        <span
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 11,
            color: C.white,
            background: color,
            padding: "2px 8px",
            borderRadius: 2,
          }}
        >
          {year}
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 18,
          fontWeight: 600,
          color: C.navy,
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "'Lato',sans-serif",
          fontSize: 14,
          color: C.muted,
          lineHeight: 1.6,
        }}
      >
        {desc}
      </div>
    </div>
  );
}
