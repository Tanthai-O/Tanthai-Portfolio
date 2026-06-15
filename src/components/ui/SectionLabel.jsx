import { C, mono } from "../../styles/theme";

export function SectionLabel({ n, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2.5rem" }}>
      <span style={{ ...mono, fontSize: 11, color: C.accent, fontWeight: 600, letterSpacing: "0.04em" }}>{n}</span>
      <div style={{ width: 1, height: 14, background: C.border2 }} />
      <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.5px", margin: 0 }}>
        {label}
      </h2>
    </div>
  );
}
