import { useState } from "react";
import { C, mono } from "../../styles/theme";
import { useLang } from "../../context/LangContext";
import { Fade } from "../ui/Fade";
import { SectionLabel } from "../ui/SectionLabel";
import { Pill } from "../ui/Pill";

export function Projects() {
  const { t, fading } = useLang();
  const [hovP, setHovP] = useState(null);

  return (
    <>
      <div style={{ height: 1, background: C.border, margin: "0 2.5rem" }} />
      <section id="Projects" style={{ maxWidth: 860, margin: "0 auto", padding: "6rem 2rem" }}>
        <Fade><SectionLabel n="02" label={t.sections.projects} /></Fade>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, opacity: fading ? 0 : 1, transition: "opacity .18s" }}>
          {t.projects.list.map((p, i) => (
            <Fade key={i} delay={i * 0.07}>
              <div
                style={{
                  background: hovP === i ? "#2a2d2e" : C.surface,
                  border: `1px solid ${hovP === i ? C.border2 : C.border}`,
                  borderRadius: 12, padding: "1.6rem 1.8rem",
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", gap: "1.5rem",
                  transition: "all .18s", cursor: "default",
                }}
                onMouseEnter={() => setHovP(i)}
                onMouseLeave={() => setHovP(null)}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                    <span style={{ ...mono, background: C.border, color: C.muted, fontSize: 10, fontWeight: 600, borderRadius: 4, padding: "2px 8px", letterSpacing: "0.06em" }}>
                      {p.tag}
                    </span>
                    <span style={{ ...mono, fontSize: 11, color: C.faint }}>{p.year}</span>
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: C.white, marginBottom: 7 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.75, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {p.stack.map((s) => <Pill key={s} label={s} />)}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 6, flexShrink: 0, opacity: hovP === i ? 1 : 0, transition: "opacity .18s" }}>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer"
                    style={{ ...mono, background: "transparent", border: `1px solid ${C.border2}`, borderRadius: 6, padding: "6px 12px", fontSize: 11, fontWeight: 600, color: C.muted, textDecoration: "none" }}>
                    {t.projects.code}
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    style={{ ...mono, background: C.accent, border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 11, fontWeight: 700, color: "#1e1e1e", textDecoration: "none" }}>
                    {t.projects.demo}
                  </a>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}