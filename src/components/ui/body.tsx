import type { ReactNode } from "react";

import { C } from "../../lib/common";

export function Body({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: object;
}) {
  return (
    <p
      style={{
        fontFamily: "'Lato',sans-serif",
        fontSize: 17,
        lineHeight: 1.75,
        color: C.muted,
        ...style,
      }}
    >
      {children}
    </p>
  );
}
