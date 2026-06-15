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
    tag: "ERP",
    title: "Mechkey-Typing",
    desc: "Enterprise-grade HR system with role-based access, approval workflows, balance tracking, and analytics.",
    stack: ["Laravel 11", "PHP 8.3", "MySQL", "Eloquent"],
    year: "2025",
    repo: "#",
    demo: "#",
  },
  {
    tag: "Computer Vision",
    title: "Lifting Risk Assessment System",
    desc: "Enterprise-style ergonomic assessment system for manual lifting tasks. Supports webcam/video input, employee hierarchy management, real-time risk monitoring, LH Index calculation, and exportable compliance reports.",
    stack: [
      "Python 3.10",
      "PySide6",
      "OpenCV",
      "MediaPipe",
      "TensorFlow/Keras",
      "scikit-learn",
      "SQLite",
      "ReportLab",
      "openpyxl",
      "bcrypt",
    ],
    year: "2025",
    repo: "#",
    demo: "#",
    highlights: [
      "Login with role-based access (Admin / Assessor)",
      "Factory → Branch → Department → Workline → Employee hierarchy",
      "Real-time assessment from webcam or uploaded video",
      "MediaPipe pose detection for hand position, torso twist, and lift counting",
      "Hybrid AI assessment (posture + lifting models) with rule-based fallback",
      "LH Index / RWL calculation based on NIOSH-style workflow",
      "Uncertainty tracking with manual review queue",
      "SQLite database with assessment and per-frame storage",
      "Standard PDF and Excel export for reporting",
    ],
    architecture: [
      "main_qt.py → MainWindow",
      "src/qt_gui → UI screens",
      "src/core → CV / AI / risk logic",
      "src/qt_utils → database, export, security",
      "src/utils/constants.py → RWL, frequency, risk thresholds",
    ],
    status:
      "Functional prototype for graduation project; not full production deployment",
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
    `tanthai — fullstack developer\nlocation: thailand · remote\nfocus: laravel · react · clean architecture\nstatus: open to work ✓`,
  skills: () =>
    `frontend  → react, typescript, tailwind css, node.js\nbackend   → laravel, python, php\ndatabase  → mysql, sqlite\ntools    → git, figma, google colab, xampp`,
  contact: () =>
    `email     → t.orahunta@gmail.com\ngithub    → github.com/Tanthai-O\nlinkedin  → linkedin.com/in/tanthai`,
  projects: () =>
    `[1] leave management erp  — laravel 11 · 2025\n[2] chefvy                — react · 2025\n[3] devtracker            — next.js · 2024`,
  clear: () => "__CLEAR__",
};
