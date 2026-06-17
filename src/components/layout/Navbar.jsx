import { useState, useEffect, useRef } from "react";
import { C, mono } from "../../styles/theme";
import { useLang } from "../../context/LangContext";

export function Navbar() {
  const { t, lang, switchLang } = useLang();
  const [logoFlash, setLogoFlash] = useState(false);
  const clickCount = useRef(0);

  const NAV_KEYS = ["about", "skills", "projects", "experience", "contact"];
  const NAV_IDS  = ["About", "Skills", "Projects", "Experience", "Contact"];

  const onLogoClick = () => {
    clickCount.current += 1;
    if (clickCount.current >= 5) {
      clickCount.current = 0;
      setLogoFlash(true);
      setTimeout(() => setLogoFlash(false), 600);
    }
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(30,30,30,0.9)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${C.border}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2.5rem", height: 48,
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        onClick={onLogoClick} title="( ͡° ͜ʖ ͡°)"
      >
        <span style={{
          ...mono, fontSize: 13, fontWeight: 600,
          color: logoFlash ? "#fff" : C.accent,
          transition: "color .1s",
          animation: logoFlash ? "logoFlash .6s ease" : "",
        }}>tanthai</span>
        <span style={{ ...mono, fontSize: 13, color: C.faint }}>@dev</span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
        {NAV_KEYS.map((key, i) => (
          <button key={key}
            onClick={() => scrollTo(NAV_IDS[i])}
            style={{
              ...mono, background: "transparent", border: "none",
              color: C.muted, fontSize: 12, fontWeight: 500,
              padding: "5px 12px", borderRadius: 5, cursor: "pointer", transition: "all .15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = C.text; e.currentTarget.style.background = C.surface; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; e.currentTarget.style.background = "transparent"; }}
          >
            {t.nav[key]}
          </button>
        ))}

        {/* Lang toggle */}
        <button onClick={switchLang} style={{
          ...mono, marginLeft: 4,
          background: "transparent",
          color: C.muted,
          border: `1px solid ${C.border2}`,
          borderRadius: 6, padding: "4px 10px",
          fontSize: 11, fontWeight: 600, cursor: "pointer",
          transition: "all .15s",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = C.accent; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border2; }}
        >
          {lang === "en" ? "TH" : "EN"}
        </button>

        {/* Resume */}
        <a href="public\Tanthai_Orahunta_Resume.pdf" download style={{
          ...mono, marginLeft: 4,
          background: C.border, color: C.accent,
          border: `1px solid ${C.border2}`,
          borderRadius: 6, padding: "4px 12px",
          fontSize: 11, fontWeight: 600, textDecoration: "none", transition: "all .15s",
        }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = C.accent}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = C.border2}
        >
          {t.nav.resume}
        </a>
      </div>
    </nav>
  );
}