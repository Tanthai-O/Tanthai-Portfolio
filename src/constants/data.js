export const GITHUB_USER = "Tanthai-O"; // username

export const NAV = ["About", "Skills", "Projects", "Experience", "Contact"];

export const SKILLS = [
  {
    cat: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  { cat: "Backend", items: ["Laravel", "PHP", "Python"] },
  { cat: "Database", items: ["MySQL", "SQLite"] },
  { cat: "Tools", items: ["Git", "Figma", "Google Colab", "XAMPP"] },
];

export const PROJECTS = [
  {
        tag: "Web App",
        year: "2026",
        title: "MechKey Typing",
        desc: "An immersive mechanical keyboard sound simulator and typing test platform. Features real switch soundpacks (Mechvibes format), WPM tracking, per-character accuracy, 8 themes, 6 keyboard layouts, and a local leaderboard.",
        stack: ["React 18", "Vite", "Web Audio API", "Vanilla CSS"],
        repo: "https://github.com/Tanthai-O/Mechkey-Typing",
        demo: "https://mechkey-typing.vercel.app/",
      },
      {
        tag: "Computer Vision",
        title: "Lifting Risk Assessment System",
        desc: "Real-time lifting risk assessment using pose tracking, hybrid AI evaluation, LH Index scoring, and PDF/Excel reporting for industrial safety teams.",
        stack: [
          "Python",
          "PySide6",
          "OpenCV",
          "MediaPipe",
          "TensorFlow",
          "SQLite",
        ],
        year: "2025",
        repo: "https://github.com/Tanthai-O/Real-time-Lifting-posture-detection",
        demo: "https://github.com/Tanthai-O/Real-time-Lifting-posture-detection",
      },
];

export const EXPERIENCE = [
  {
    period: "2024 – Present",
    role: "Fullstack Developer",
    co: "Personal Projects",
    note: "Building production-grade systems: ERP, SaaS",
  },
  {
    period: "2025",
    role: "ฝึกงานที่บริษัท โตโยต้า แก่นนคร",
    co: "Programmer",
    note: "ทำเว็บ PHP",
  },
  {
    period: "2020 – 2024",
    role: "B.Sc. Computer Science",
    co: "University · Thailand",
    note: "Software engineering, algorithms, databases, web systems.",
  },
];

export const TYPEWRITER_TEXTS = [
  "Fullstack Developer",
  "React Developer",
  "Clean Code Advocate",
];

export const TERMINAL_CMDS = {
  help: () =>
    `available commands:\n  whoami     → about me\n  skills     → tech stack\n  contact    → get in touch\n  projects   → featured work\n  clear      → clear terminal`,
  whoami: () =>
    `tanthai — junior developer\nlocation: thailand · remote\nfocus: laravel · react · clean architecture\nstatus: open to work ✓`,
  skills: () =>
    `frontend  → react, typescript, tailwind css, node.js\nbackend   → laravel, python, php\ndatabase  → mysql, sqlite\ntools    → git, figma, google colab, xampp`,
  contact: () =>
    `email     → t.orahunta@gmail.com\ngithub    → github.com/Tanthai-O\nlinkedin  → linkedin.com/in/tanthai`,
  projects: () =>
    `[1] mechkey typing              — react 18 · 2026\n[2] lifting risk assessment     — python · 2025`,
  clear: () => "__CLEAR__",
};
