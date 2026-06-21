import { useState, useRef, useEffect } from "react";
import { C, mono } from "../../styles/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { TERMINAL_CMDS } from "../../constants/data";

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState([
    { type: "sys", text: `tanthai@dev ~ — type "help" to start` },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const { isMobile } = useBreakpoint();

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [lines]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 80); }, [open]);

  const run = (cmd) => {
    const c = cmd.trim().toLowerCase();
    if (!c) return;
    setHistory((h) => [c, ...h]);
    setHistIdx(-1);
    const newLines = [...lines, { type: "in", text: `$ ${c}` }];
    const fn = TERMINAL_CMDS[c];
    if (fn) {
      const out = fn();
      if (out === "__CLEAR__") {
        setLines([{ type: "sys", text: `tanthai@dev ~ — type "help" to start` }]);
        return;
      }
      out.split("\n").forEach((l) => newLines.push({ type: "out", text: l }));
    } else {
      newLines.push({ type: "err", text: `command not found: ${c}. type "help" for available commands.` });
    }
    setLines(newLines);
  };

  const onKey = (e) => {
    if (e.key === "Enter") { run(input); setInput(""); }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(i); setInput(history[i] || "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = Math.max(histIdx - 1, -1);
      setHistIdx(i); setInput(i === -1 ? "" : history[i] || "");
    }
    if (e.key === "Escape") setOpen(false);
  };

  const terminalWidth = isMobile ? "calc(100vw - 32px)" : 480;
  const terminalRight = isMobile ? 16 : 24;
  const terminalBottom = isMobile ? 72 : 76;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        title="Open terminal"
        style={{
          ...mono,
          position: "fixed", bottom: 24, right: 24, zIndex: 150,
          background: open ? C.accent : C.surface,
          color: open ? "#1e1e1e" : C.accent,
          border: `1px solid ${open ? C.accent : C.border2}`,
          borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 700,
          cursor: "pointer", transition: "all .2s",
          boxShadow: open ? `0 0 20px ${C.accent}44` : "none",
        }}
        onMouseEnter={(e) => { if (!open) { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = `0 0 14px ${C.accent}33`; } }}
        onMouseLeave={(e) => { if (!open) { e.currentTarget.style.borderColor = C.border2; e.currentTarget.style.boxShadow = "none"; } }}
      >
        {open ? "✕ close" : ">_ terminal"}
      </button>

      {open && (
        <div style={{
          position: "fixed", bottom: terminalBottom, right: terminalRight, zIndex: 149,
          width: terminalWidth, maxHeight: 340,
          background: "#141414", border: `1px solid ${C.border2}`,
          borderRadius: 12, overflow: "hidden",
          boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px ${C.border}`,
          display: "flex", flexDirection: "column",
          animation: "termSlide .18s ease",
        }}>
          {/* title bar */}
          <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "9px 14px", display: "flex", alignItems: "center", gap: 7, flexShrink: 0 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
            ))}
            <span style={{ ...mono, fontSize: 11, color: C.faint, marginLeft: 8 }}>tanthai@dev — bash</span>
          </div>

          {/* output */}
          <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 3 }}>
            {lines.map((l, i) => (
              <pre key={i} style={{
                ...mono, fontSize: 12, margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all",
                color: l.type === "in" ? C.accent : l.type === "err" ? "#f48771" : l.type === "sys" ? C.muted : C.text,
                lineHeight: 1.65,
              }}>
                {l.text}
              </pre>
            ))}
            <div ref={endRef} />
          </div>

          {/* input */}
          <div style={{ borderTop: `1px solid ${C.border}`, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8, flexShrink: 0, background: "#141414" }}>
            <span style={{ ...mono, fontSize: 12, color: C.accent, flexShrink: 0 }}>$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="type a command..."
              style={{ ...mono, flex: 1, background: "transparent", border: "none", outline: "none", color: C.text, fontSize: 12, caretColor: C.accent }}
            />
          </div>
        </div>
      )}
    </>
  );
}
