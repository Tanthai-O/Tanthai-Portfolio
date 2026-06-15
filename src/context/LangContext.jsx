import { createContext, useContext, useState } from "react";
import { en } from "../locales/en";
import { th } from "../locales/th";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [fading, setFading] = useState(false);

  const switchLang = () => {
    setFading(true);
    setTimeout(() => {
      setLang((l) => (l === "en" ? "th" : "en"));
      setFading(false);
    }, 180);
  };

  const t = lang === "en" ? en : th;

  return (
    <LangContext.Provider value={{ lang, switchLang, t, fading }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);