import { C } from "../../lib/common";

export function ImgPlaceholder({
  label,
  height = 200,
}: {
  label: string;
  height: number;
}) {
  return (
    <div className="img-placeholder" style={{ height, width: "100%" }}>
      <div style={{ fontSize: 32 }}>🖼️</div>
      <div>[IMAGINE: {label}]</div>
      <div style={{ fontSize: 10, color: C.muted }}>
        Înlocuiți cu fotografia reală
      </div>
    </div>
  );
}
