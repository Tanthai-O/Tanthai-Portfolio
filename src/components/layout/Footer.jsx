import { C, mono } from "../../styles/theme";
import { useLang } from "../../context/LangContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "1.4rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ ...mono, fontSize: 12, color: C.faint }}>tanthai@dev ~</span>
      <span style={{ ...mono, fontSize: 11, color: C.faint }}>{t.footer.copy}</span>
    </footer>
  );
}