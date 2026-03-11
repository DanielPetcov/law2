import { C } from "../../lib/common";

import {
  Chenar,
  Tag,
  Heading,
  Divider,
  Body,
  ImgPlaceholder,
  StatBox,
  FactRow,
} from "../ui";

export function SlidePersonal({ active }: { active: boolean }) {
  const cls = active ? "slide-active" : "";
  return (
    <div
      className={cls}
      style={{
        height: "100%",
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 52,
        }}
      >
        <div>
          <div className="anim anim-sr d1">
            <Tag>Personalul SFS · Art. 148–153 CF</Tag>
          </div>
          <div className="anim anim-sr d2">
            <Heading size={50}>
              <em style={{ color: C.gold, fontStyle: "italic" }}>
                Funcționarii
              </em>
              <br />
              Fiscali
            </Heading>
          </div>
          <Divider />
          <div className="anim anim-fu d3">
            <Body>
              Personalul SFS este compus din funcționari fiscali de stat —
              funcționari publici care îndeplinesc atribuțiile de administrare
              fiscală. Statutul lor este reglementat prin Titlul V al Codului
              Fiscal (art. 148–153).
            </Body>
          </div>
          <div className="anim anim-fu d4" style={{ marginTop: 16 }}>
            {[
              [
                "Selectare & Încadrare",
                "Art. 148 CF: Funcționarii fiscali sunt selectați prin concurs public și se încadrează în serviciu pe baza criteriilor de competență profesională, integritate și studii de specialitate.",
              ],
              [
                "Grade de calificare",
                "Art. 149 CF: Funcționarii dețin grade de calificare (consilier fiscal, consilier de stat fiscal, consilier de stat superior etc.), acordate în funcție de performanțe și vechime.",
              ],
              [
                "Obligații",
                "Art. 136 CF: Să respecte legislația, să trateze contribuabilii corect și imparțial, să păstreze secretul fiscal, să nu accepte favoruri sau interese personale.",
              ],
              [
                "Protecție & Drepturi",
                "Art. 151–152 CF: Funcționarii au dreptul la protecție legală, asigurare socială și medicală de stat, compensații pentru risc profesional.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                style={{
                  marginBottom: 10,
                  padding: "12px 16px",
                  background: C.white,
                  border: `1px solid rgba(180,135,40,.18)`,
                  borderLeft: `3px solid ${C.gold}`,
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: C.navy,
                    marginBottom: 4,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontSize: 13,
                    color: C.muted,
                    lineHeight: 1.55,
                  }}
                >
                  {d}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="anim anim-sc d3">
            <ImgPlaceholder
              label="Funcționari fiscali / personalul SFS la lucru"
              height={180}
            />
          </div>
          <div
            className="anim anim-fu d4"
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <StatBox
              value="~2400"
              label="Angajați total în sistemul SFS"
              color={C.navy}
            />
            <StatBox
              value="Concurs"
              label="Modalitate de angajare transparentă"
              color={C.gold}
            />
            <StatBox
              value="Ziua Fis."
              label="Zi profesională a funcționarului fiscal"
              color={C.navyL}
            />
            <StatBox
              value="34 ani"
              label="Vechimea sistemului fiscal (2024)"
              color={C.red}
            />
          </div>
          <div className="anim anim-fu d5" style={{ marginTop: 14 }}>
            <FactRow icon="🎓">
              Funcționarii participă la seminare de perfecționare organizate de
              FMI, OCDE, Banca Mondială și alte organisme internaționale.
            </FactRow>
            <FactRow icon="🔒">
              Secretul fiscal: funcționarii nu pot divulga informații despre
              contribuabili terților fără bază legală.
            </FactRow>
          </div>
        </div>
      </div>
    </div>
  );
}
