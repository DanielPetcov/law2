import type { ReactNode } from "react";

import { C } from "../../lib/common";

export function Heading({
  children,
  size = 52,
  italic = false,
  color = C.navy,
}: {
  children: ReactNode;
  size?: number;
  italic?: boolean;
  color?: string;
}) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: size,
        fontWeight: 700,
        lineHeight: 1.1,
        color,
        fontStyle: italic ? "italic" : "normal",
        marginBottom: 0,
      }}
    >
      {children}
    </h2>
  );
}
