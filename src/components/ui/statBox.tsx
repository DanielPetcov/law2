import { C } from "../../lib/common";

export function StatBox({
  value,
  label,
  color = C.navy,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className="info-card"
      style={{
        padding: "18px 20px",
        background: C.white,
        border: `1.5px solid rgba(180,135,40,.25)`,
        borderRadius: 4,
        borderTop: `3px solid ${color}`,
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontWeight: 700,
          color,
          lineHeight: 1,
        }}
        className="text-2xl lg:text-4xl"
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Lato',sans-serif",
          fontSize: 12,
          color: C.muted,
          marginTop: 4,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </div>
    </div>
  );
}
