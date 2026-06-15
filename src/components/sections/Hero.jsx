import { C, mono } from "../../styles/theme";
import { useLang } from "../../context/LangContext";
import { Typewriter } from "../ui/Typewriter";

export function Hero() {
  const { t, fading } = useLang();

  return (
    <section
      id="About"
      style={{
        minHeight: "91vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 2rem 5rem",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          width: "100%",
          opacity: fading ? 0 : 1,
          transition: "opacity .18s ease",
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: C.surface,
            border: `1px solid ${C.border2}`,
            borderRadius: 6,
            padding: "5px 14px",
            marginBottom: "2.2rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#3fb950",
              display: "inline-block",
              boxShadow: "0 0 5px #3fb950",
            }}
          />
          <span
            style={{
              ...mono,
              fontSize: 11,
              color: C.muted,
              letterSpacing: "0.06em",
            }}
          >
            {t.hero.available}
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.4rem,6vw,4rem)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.1,
            color: C.white,
            marginBottom: "0.5rem",
          }}
        >
          Tanthai
        </h1>

        {/* Typewriter */}
        <h2
          style={{
            fontSize: "clamp(1.1rem,2.5vw,1.5rem)",
            fontWeight: 400,
            color: C.muted,
            letterSpacing: "-0.3px",
            marginBottom: "1.6rem",
          }}
        >
          <Typewriter texts={t.typewriter} showCursor={true} />
        </h2>

        {/* Code block */}
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 10,
            padding: "1.2rem 1.5rem",
            marginBottom: "2rem",
            ...mono,
            fontSize: 13,
            lineHeight: 2,
          }}
        >
          <span style={{ color: "#569cd6" }}>const</span>
          <span style={{ color: C.text }}> developer </span>
          <span style={{ color: C.muted }}>=</span>
          <span style={{ color: C.text }}> {"{"}</span>
          <br />
          <span style={{ paddingLeft: 20, color: "#9cdcfe" }}>stack</span>
          <span style={{ color: C.muted }}>: </span>
          <span style={{ color: "#ce9178" }}>"{t.hero.stack}"</span>
          <span style={{ color: C.muted }}>,</span>
          <br />
          <span style={{ paddingLeft: 20, color: "#9cdcfe" }}>focus</span>
          <span style={{ color: C.muted }}>: </span>
          <span style={{ color: "#ce9178" }}>"{t.hero.focus}"</span>
          <span style={{ color: C.muted }}>,</span>
          <br />
          <span style={{ paddingLeft: 20, color: "#9cdcfe" }}>location</span>
          <span style={{ color: C.muted }}>: </span>
          <span style={{ color: "#ce9178" }}>"{t.hero.location}"</span>
          <br />
          <span style={{ color: C.text }}>{"}"}</span>
        </div>
      </div>
    </section>
  );
}
