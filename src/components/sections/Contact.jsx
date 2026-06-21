import { useState } from "react";
import { C, mono } from "../../styles/theme";
import { GITHUB_USER } from "../../constants/data";
import { useLang } from "../../context/LangContext";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Fade } from "../ui/Fade";
import { SectionLabel } from "../ui/SectionLabel";
import { ResumeBanner } from "../ui/ResumeBanner";

export function Contact() {
  const { t, fading } = useLang();
  const { isMobile } = useBreakpoint();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText("t.orahunta@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const links = [
    { label: t.contact.email,    val: "t.orahunta@gmail.com",       copyable: true },
    { label: t.contact.github,   val: `github.com/${GITHUB_USER}`, href: `https://github.com/${GITHUB_USER}` },
    { label: t.contact.linkedin, val: "linkedin.com/in/tanthai",   href: "https://www.linkedin.com/in/tanthai-orahunta-82336b345/" },
  ];

  return (
    <>
      <div style={{ height: 1, background: C.border, margin: "0 2.5rem" }} />
      <section id="Contact" style={{ maxWidth: 860, margin: "0 auto", padding: "6rem 2rem 9rem" }}>
        <Fade><SectionLabel n="05" label={t.sections.contact} /></Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 10,
          maxWidth: 680,
          opacity: fading ? 0 : 1,
          transition: "opacity .18s",
        }}>
          <Fade delay={0.05} style={{ gridColumn: isMobile ? "1" : "1/-1" }}>
            <ResumeBanner />
          </Fade>

          {links.map((c, i) => (
            <Fade key={i} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={c.copyable ? (e) => { e.preventDefault(); copy(); } : undefined}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    background: C.surface, border: `1px solid ${C.border}`,
                    borderRadius: 10, padding: "13px 16px", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    gap: 8, transition: "border-color .15s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = C.border2}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = C.border}
                >
                  <div>
                    <p style={{ ...mono, fontSize: 10, color: C.faint, marginBottom: 3 }}>{c.label}</p>
                    <p style={{ fontSize: 13, color: C.text }}>{c.val}</p>
                  </div>
                  <span style={{ color: C.faint, fontSize: 14 }}>↗</span>
                </div>
              </a>
            </Fade>
          ))}
        </div>

        {copied && (
          <p style={{ ...mono, fontSize: 11, color: "#3fb950", marginTop: 12 }}>
            {t.contact.copied}
          </p>
        )}
      </section>
    </>
  );
}
