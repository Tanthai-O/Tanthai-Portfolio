# Tanthai Orahunta — Portfolio

Personal portfolio website styled like a code editor / terminal. Built with React and Vite.

## Features

- Sections: Hero (typewriter), Skills, Projects, GitHub Activity, Experience, Contact
- Interactive terminal (`help`, `whoami`, `skills`, `projects`, `contact`, `clear`)
- English / Thai language switch
- Live GitHub stats via the public GitHub API
- Downloadable resume (PDF)
- Responsive layout for mobile and desktop

## Tech stack

React 18 · Vite 5 · Tailwind CSS 3 · ESLint

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer
│   ├── sections/   Hero, Skills, Projects, GitHubStats, Experience, Contact
│   └── ui/         Terminal, Fade, Pill, Typewriter, ...
├── constants/data.js   Contact info, skills, terminal commands
├── context/            Language context
├── hooks/              useBreakpoint, useInView
├── locales/            en.js, th.js (translated content)
└── styles/theme.js     Color tokens
```

## Editing content

- Contact details (email, LinkedIn, GitHub username): `src/constants/data.js`
- Page text and project/experience entries: `src/locales/en.js` and `src/locales/th.js`
- Resume file: `public/Tanthai_Orahunta_Resume.pdf`

## Contact

[GitHub](https://github.com/Tanthai-O) · [LinkedIn](https://www.linkedin.com/in/tanthai-orahunta-82336b345/)
