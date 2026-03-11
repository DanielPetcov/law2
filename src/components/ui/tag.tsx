import type { ReactNode } from "react";
import { C } from "../../lib/common";
export function Tag({
  children,
  color = C.gold,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        fontFamily: "'DM Mono',monospace",
        fontSize: 11,
        letterSpacing: 3,
        textTransform: "uppercase",
        color,
        display: "block",
        marginBottom: 10,
      }}
    >
      {children}
    </span>
  );
}
