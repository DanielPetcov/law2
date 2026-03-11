import type { ReactNode } from "react";

import { C } from "../../lib/common";

export function FactRow({
  icon,
  children,
}: {
  icon: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        padding: "12px 16px",
        background: C.white,
        border: `1px solid rgba(180,135,40,.18)`,
        borderLeft: `3px solid ${C.goldL}`,
        borderRadius: 2,
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
      <span
        style={{
          fontFamily: "'Lato',sans-serif",
          fontSize: 15,
          color: C.text,
          lineHeight: 1.6,
        }}
      >
        {children}
      </span>
    </div>
  );
}
