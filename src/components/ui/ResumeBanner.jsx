import { useState } from "react";
import { C, mono } from "../../styles/theme";

export function ResumeBanner() {
  const [hov, setHov] = useState(false);

  return (
    <div
      style={{
        background: hov ? "#2a2d2e" : C.surface,
        border: `1px solid ${hov ? C.border2 : C.border}`,
        borderRadius: 12, padding: "1.4rem 1.8rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "all .18s", cursor: "pointer",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 40, height: 40, background: C.border, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
          📄
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: C.white, marginBottom: 2 }}>Tanthai — Resume</p>
          <p style={{ ...mono, fontSize: 11, color: C.muted }}>Tanthai_Resume.pdf · Updated 2026</p>
        </div>
      </div>

      <a
        href="src\assets\Resume-2569.pdf"
        download
        style={{
          ...mono,
          background: C.accent, color: "#1e1e1e",
          border: "none", borderRadius: 7,
          padding: "8px 18px", fontSize: 12, fontWeight: 700,
          display: "flex", alignItems: "center", gap: 6,
          transform: hov ? "translateY(-1px)" : "none",
          transition: "transform .15s", textDecoration: "none",
        }}
      >
        ↓ Download
      </a>
    </div>
  );
}