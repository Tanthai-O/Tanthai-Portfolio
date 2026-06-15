import { C, mono } from "../../styles/theme";

export function Pill({ label }) {
  return (
    <span
      style={{
        background: C.border,
        color: C.muted,
        fontSize: 11,
        fontWeight: 500,
        borderRadius: 5,
        padding: "2px 9px",
        border: `1px solid ${C.border2}`,
        ...mono,
      }}
    >
      {label}
    </span>
  );
}