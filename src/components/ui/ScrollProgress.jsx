import { useState, useEffect } from "react";
import { C } from "../../styles/theme";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 2 }}>
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: C.accent,
          transition: "width .1s linear",
          boxShadow: `0 0 8px ${C.accent}`,
        }}
      />
    </div>
  );
}