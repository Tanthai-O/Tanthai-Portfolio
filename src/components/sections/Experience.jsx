import { C, mono } from "../../styles/theme";
import { useLang } from "../../context/LangContext";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Fade } from "../ui/Fade";
import { SectionLabel } from "../ui/SectionLabel";

export function Experience() {
  const { t, fading } = useLang();
  const { isMobile } = useBreakpoint();
  const roles = t.experience.roles;

  return (
    <>
      <div style={{ height: 1, background: C.border, margin: "0 2.5rem" }} />
      <section id="Experience" style={{ maxWidth: 860, margin: "0 auto", padding: "6rem 2rem" }}>
        <Fade><SectionLabel n="04" label={t.sections.experience} /></Fade>
        <div style={{ opacity: fading ? 0 : 1, transition: "opacity .18s" }}>
          {roles.map((e, i) => (
            <Fade key={i} delay={i * 0.07}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                gap: isMobile ? "0.3rem" : "2rem",
                padding: "1.5rem 0",
                borderBottom: i < roles.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <p style={{ ...mono, fontSize: 11, color: C.faint, lineHeight: 1.6, paddingTop: isMobile ? 0 : 2 }}>{e.period}</p>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 3 }}>{e.role}</p>
                  <p style={{ ...mono, fontSize: 11, color: C.accent, marginBottom: 7 }}>{e.co}</p>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.75 }}>{e.note}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}
