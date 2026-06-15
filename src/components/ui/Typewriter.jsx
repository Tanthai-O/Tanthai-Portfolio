import { useState, useEffect } from "react";
import { C } from "../../styles/theme";

export function Typewriter({ texts, speed = 55, showCursor = true }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const cur = texts[idx];
    let t;
    if (!deleting && displayed.length < cur.length) {
      t = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), speed);
    } else if (!deleting && displayed.length === cur.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, idx, texts, speed]);

  useEffect(() => {
    if (!showCursor) return;
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, [showCursor]);

  return (
    <span>
      <span style={{ color: C.accent }}>{displayed}</span>
      {showCursor && (
        <span style={{ opacity: blink ? 1 : 0, color: C.accent, transition: "opacity .1s" }}>▌</span>
      )}
    </span>
  );
}