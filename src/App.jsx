import { useState, useEffect, useRef } from "react";
import { C, mono } from "./styles/theme";
import { NAV, SKILLS, PROJECTS, EXPERIENCE, GITHUB_USER, TYPEWRITER_TEXTS } from "./constants/data";

import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Terminal } from "./components/ui/Terminal";
import { Fade } from "./components/ui/Fade";
import { SectionLabel } from "./components/ui/SectionLabel";
import { Pill } from "./components/ui/Pill";
import { Typewriter } from "./components/ui/Typewriter";
import { ResumeBanner } from "./components/ui/ResumeBanner";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { GitHubStats } from "./components/sections/GitHubStats";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

export default function App() {
  useEffect(() => {
    // Console easter egg
    const s1 = "color:#4fc1ff;font-size:18px;font-weight:bold;font-family:monospace";
    const s2 = "color:#858585;font-size:12px;font-family:monospace";
    const s3 = "color:#3fb950;font-size:12px;font-family:monospace";
    console.log("%c tanthai@dev ~", s1);
    console.log("%c ──────────────────────────────────────", s2);
    console.log("%c 👋 Hey — since you're inspecting the code,", s2);
    console.log("%c    you're probably a developer yourself.", s2);
    console.log("%c    I like you already.", s2);
    console.log("%c ──────────────────────────────────────", s2);
    console.log("%c ✓ Built with React + clean architecture", s3);
    console.log("%c ✓ No frameworks abused in this process", s3);
    console.log("%c ✓ tanthai.dev@gmail.com", s3);
    console.log("%c ──────────────────────────────────────", s2);
  }, []);

  return (
    <div style={{ fontFamily: "-apple-system,'Inter',sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border2}; border-radius: 99px; }
        ::selection { background: #264f78; color: #fff; }
        @keyframes termSlide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes logoFlash { 0%,100% { color: ${C.accent}; } 50% { color: #fff; } }
      `}</style>

      <ScrollProgress />
      <Terminal />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <GitHubStats username={GITHUB_USER} />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}