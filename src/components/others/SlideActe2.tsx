import { C } from "../../lib/common";
import { Chenar, Tag, Heading, Divider, ActCard } from "../ui";

export function SlideActe2({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";

  const acts = [
    {
      n: "05",
      year: "2014",
      color: C.navy,
      title: "HG nr.500/2014 — Simbolica SFS",
      desc: "Aprobă stema, drapelul și culoarea corporativă a SFS.",
      link: "https://www.legis.md/UserFiles/Image/RO/Guvernul/2014/anexa3_HG%20Nr_%20500%20din%2001_07_2014_ro.docx",
    },
    {
      n: "06",
      year: "2023",
      color: C.gold,
      title: "Ordinele SFS (ex. Ordin nr.499/2025)",
      desc: "Acte interne ale Serviciului Fiscal privind proceduri și instrucțiuni operaționale pentru inspectori.",
      link: "https://sfs.md/ro/ordinele-de-baze-de-date-de-generalizare",
    },
    {
      n: "07",
      year: "2024",
      color: C.red,
      title: "HG nr.250 din 10 apr.2024",
      desc: "Regulamentul privind organizarea audiențelor publice ale conducerii SFS cu cetățenii și contribuabilii.",
      link: "https://www.legis.md/cautare/getResults?doc_id=142825&lang=ro",
    },
  ];
  return (
    <div
      className={cls}
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: 10,
      }}
    >
      <Chenar />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 72px",
        }}
      >
        <div className="anim anim-sr d1">
          <Tag>Cadrul Juridic · Slide 2 / 2</Tag>
        </div>
        <div className="anim anim-sr d2">
          <Heading size={46}>
            Acte Normative{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Secundare</em>
          </Heading>
        </div>
        <Divider />
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
            {acts.map((a) => (
              <div className="anim anim-fu d3" key={a.n}>
                <ActCard {...a} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
