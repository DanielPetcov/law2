import { C } from "../../lib/common";

export function OrgChart() {
  const nodes = [
    {
      id: "dir",
      label: "Olga GOLBAN\nDirectoare SFS",
      x: 320,
      y: 20,
      color: C.navy,
      textColor: C.white,
    },
    {
      id: "ad1",
      label: "Petru GRICIUC\nDir. Adjunct",
      x: 60,
      y: 130,
      color: C.navyL,
      textColor: C.white,
    },
    {
      id: "ad2",
      label: "Iuri LICHII\nDir. Adjunct",
      x: 240,
      y: 130,
      color: C.navyL,
      textColor: C.white,
    },
    {
      id: "ad3",
      label: "Sergiu CHIRCU\nDir. Adjunct",
      x: 420,
      y: 130,
      color: C.navyL,
      textColor: C.white,
    },
    {
      id: "ad4",
      label: "Victoria BELOUS\nDir. Adjunct",
      x: 600,
      y: 130,
      color: C.navyL,
      textColor: C.white,
    },
    {
      id: "dg1",
      label: "DG Metodologie\nImpozite & Taxe",
      x: 20,
      y: 250,
      color: C.gold,
      textColor: C.text,
    },
    {
      id: "dg2",
      label: "DG Admin. Fiscală\nContribuabili Mari",
      x: 190,
      y: 250,
      color: C.gold,
      textColor: C.text,
    },
    {
      id: "dg3",
      label: "DG Conformare\nVoluntară",
      x: 360,
      y: 250,
      color: C.gold,
      textColor: C.text,
    },
    {
      id: "dg4",
      label: "DG Tehnologii\nInformaționale",
      x: 530,
      y: 250,
      color: C.gold,
      textColor: C.text,
    },
    {
      id: "dg5",
      label: "DG Arierate &\nExecutare Silită",
      x: 110,
      y: 360,
      color: C.red,
      textColor: C.white,
    },
    {
      id: "dg6",
      label: "DG Resurse\nUmane",
      x: 290,
      y: 360,
      color: C.red,
      textColor: C.white,
    },
    {
      id: "dg7",
      label: "Dir. Antifraudă\nFiscală",
      x: 470,
      y: 360,
      color: C.red,
      textColor: C.white,
    },
  ];
  const edges = [
    ["dir", "ad1"],
    ["dir", "ad2"],
    ["dir", "ad3"],
    ["dir", "ad4"],
    ["ad1", "dg1"],
    ["ad2", "dg2"],
    ["ad3", "dg3"],
    ["ad4", "dg4"],
    ["ad1", "dg5"],
    ["ad2", "dg6"],
    ["ad3", "dg7"],
  ];
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const W = 136,
    H = 58;
  return (
    <div style={{ position: "relative", width: "100%", overflowX: "auto" }}>
      <svg
        width="760"
        height="440"
        style={{ display: "block", margin: "0 auto" }}
      >
        {edges.map(([a, b], i) => {
          const na = nodeMap[a],
            nb = nodeMap[b];
          return (
            <line
              key={i}
              x1={na.x + W / 2}
              y1={na.y + H}
              x2={nb.x + W / 2}
              y2={nb.y}
              stroke={C.border}
              strokeWidth="1.5"
              strokeDasharray="4 2"
              opacity="0.7"
            />
          );
        })}
        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x},${n.y})`}>
            <rect
              width={W}
              height={H}
              rx="4"
              fill={n.color}
              stroke={C.border}
              strokeWidth="1"
            />
            {n.label.split("\n").map((line, i) => (
              <text
                key={i}
                x={W / 2}
                y={18 + i * 18}
                textAnchor="middle"
                fill={n.textColor}
                fontSize={i === 0 ? 12 : 10.5}
                fontFamily="Lato,sans-serif"
                fontWeight={i === 0 ? 700 : 400}
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
