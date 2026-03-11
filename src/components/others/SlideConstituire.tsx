import { C } from "../../lib/common";

import { Chenar, Divider, Tag, Heading, Body, StatBox, FactRow } from "../ui";

export function SlideConstituire({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
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
          gap: 52,
          alignItems: "start",
        }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        <div>
          <div className="anim anim-sr d1">
            <Tag>Modul de Constituire</Tag>
          </div>
          <div className="anim anim-sr d2">
            <Heading size={50}>
              Istoria &{" "}
              <em style={{ color: C.gold, fontStyle: "italic" }}>Fondarea</em>
            </Heading>
          </div>
          <Divider />
          <div className="anim anim-fu d3">
            <Body>
              SFS a fost instituit ca sistem unitar prin{" "}
              <strong>Legea nr.876-XII din 22 ianuarie 1992</strong>, la scurt
              timp după proclamarea independenței Republicii Moldova.
            </Body>
          </div>
          <div className="anim anim-fu d4" style={{ marginTop: 16 }}>
            {[
              [
                "1992",
                "Înfiintat prin Legea 876-XII — primele inspectorate fiscale",
              ],
              [
                "1993",
                "Reorganizarea Inspectoratelor Fiscale de Stat teritoriale",
              ],
              ["1994", "Adoptarea Codului Fiscal și a legilor TVA și accize"],
              [
                "1996",
                "Înfiintat Inspectoratul Fiscal de Stat pe UTA Găgăuzia (HG 684)",
              ],
              [
                "2010",
                "Nouă structură organizatorică aprobată (Ord. MF nr.7/2010)",
              ],
              ["2014", "Adoptarea stemei și drapelului propriu (HG 500/2014)"],
              [
                "2017",
                "Reforma majoră: SFS devine persoană juridică unică (Legea 281)",
              ],
              [
                "2020",
                "Constituirea DG Arierate ca subdiviziune de sine stătătoare",
              ],
            ].map(([y, t]) => (
              <div
                key={y}
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 8,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 11,
                    color: C.white,
                    background: C.navy,
                    padding: "2px 7px",
                    borderRadius: 2,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {y}
                </span>
                <span
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontSize: 14,
                    color: C.text,
                    lineHeight: 1.5,
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="anim anim-sc d3">
          {/* <ImgPlaceholder
            label="Sediul SFS — clădire istorică / inaugurare"
            height={200}
          /> */}
          <img
            src="/cladire.png"
            alt="Sediul SFS — clădire istorică / inaugurare"
          />
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <StatBox value="1992" label="Anul fondării" color={C.navy} />
            <StatBox value="34" label="Ani de activitate" color={C.gold} />
            <StatBox
              value="1 apr\n2017"
              label="Reformă — persoană juridică unică"
              color={C.red}
            />
            <StatBox
              value="HG 395"
              label="Regulament actual de organizare"
              color={C.navyL}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <FactRow icon="⚖️">
              SFS este subordonat <strong>Ministerului Finanțelor</strong> și nu
              deține autonomie bugetară proprie.
            </FactRow>
            <FactRow icon="🏅">
              Deviză:{" "}
              <strong>
                "Funcționarul fiscal — în serviciul contribuabilului"
              </strong>
            </FactRow>
          </div>
        </div>
      </div>
    </div>
  );
}
