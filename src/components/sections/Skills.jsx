import { C } from "../../styles/theme";
import { SKILLS } from "../../constants/data";
import { useLang } from "../../context/LangContext";
import { Fade } from "../ui/Fade";
import { SectionLabel } from "../ui/SectionLabel";

export function Skills() {
  const { t, fading } = useLang();
  const catKeys = ["frontend", "backend", "database", "tools"];

  return (
    <section id="Skills" style={{ maxWidth: 860, margin: "0 auto", padding: "6rem 2rem" }}>
      <Fade><SectionLabel n="01" label={t.sections.skills} /></Fade>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(185px,1fr))", gap: 10, opacity: fading ? 0 : 1, transition: "opacity .18s" }}>
        {SKILLS.map((s, i) => (
          <Fade key={s.cat} delay={i * 0.06}>
            <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "1.25rem", transition: "border-color .18s" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = C.border2}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = C.border}
            >
              <p style={{ fontFamily: "'Fira Code',monospace", fontSize: 10, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 14 }}>
                {t.skills[catKeys[i]]?.toUpperCase()}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {s.items.map((it) => (
                  <span key={it} style={{ fontSize: 13, color: C.text, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.faint, display: "inline-block", flexShrink: 0 }} />{it}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}