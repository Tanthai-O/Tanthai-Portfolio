import { useEffect, useRef } from "react";

const COLORS = ["#4fc1ff", "#3fb950", "#febc2e", "#ff5f57", "#c586c0"];

// Full-screen confetti burst; fires whenever `burst` changes to a value > 0.
export function Confetti({ burst }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!burst || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 160 }, () => ({
      x: canvas.width * (0.3 + Math.random() * 0.4),
      y: canvas.height * 0.85,
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 16 + 8),
      size: Math.random() * 6 + 4,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const age = now - start;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = Math.max(0, 1 - age / 3200);
      pieces.forEach((p) => {
        p.vy += 0.35;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      });
      if (age < 3200) raf = requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [burst]);

  return <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: 200, pointerEvents: "none" }} />;
}
