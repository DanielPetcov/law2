import { C } from "../../lib/common";

export function Divider({ color = C.gold, width = 70 }) {
  return (
    <div
      style={{
        width,
        height: 2,
        background: `linear-gradient(90deg,${C.red},${color})`,
        margin: "16px 0 20px",
      }}
    />
  );
}
