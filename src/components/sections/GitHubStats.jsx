import { useState, useEffect } from "react";
import { C, mono } from "../../styles/theme";
import { Fade } from "../ui/Fade";
import { SectionLabel } from "../ui/SectionLabel";
import { Pill } from "../ui/Pill";

export function GitHubStats({ username }) {
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`).then((r) => r.json()),
    ])
      .then(([user, r]) => {
        if (user.message === "Not Found") { setErr(true); setLoading(false); return; }
        setData(user);
        setRepos(Array.isArray(r) ? r.filter((x) => !x.fork) : []);
        setLoading(false);
      })
      .catch(() => { setErr(true); setLoading(false); });
  }, [username]);

  const totalStars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);
  const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))].slice(0, 6);
  const topRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);

  const stats = err || !data
    ? [{ l: "Repos", v: "—" }, { l: "Stars", v: "—" }, { l: "Followers", v: "—" }, { l: "Following", v: "—" }]
    : [
        { l: "Public Repos", v: data.public_repos },
        { l: "Followers",    v: data.followers },
        { l: "Total Stars",  v: totalStars },
        { l: "Following",    v: data.following },
      ];

  return (
    <>
      <div style={{ height: 1, background: C.border, margin: "0 2.5rem" }} />

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "6rem 2rem" }}>
        <Fade><SectionLabel n="03" label="GitHub Activity" /></Fade>

        {loading ? (
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "2rem" }}>
            <span style={{ ...mono, fontSize: 12, color: C.faint }}>// fetching github data...</span>
          </div>
        ) : (
          <Fade delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

              {/* Stat cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 10 }}>
                {stats.map((s) => (
                  <div key={s.l}
                    style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "1.1rem 1.2rem", transition: "border-color .18s" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = C.border2}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = C.border}
                  >
                    <p style={{ ...mono, fontSize: 22, fontWeight: 700, color: C.white, marginBottom: 4 }}>
                      {typeof s.v === "number" ? s.v.toLocaleString() : s.v}
                    </p>
                    <p style={{ fontSize: 12, color: C.muted }}>{s.l}</p>
                  </div>
                ))}
              </div>

              {/* Languages + Top repos */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                  <p style={{ ...mono, fontSize: 10, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 14 }}>TOP LANGUAGES</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {langs.length > 0
                      ? langs.map((l) => <Pill key={l} label={l} />)
                      : <span style={{ ...mono, fontSize: 12, color: C.faint }}>// set username to load</span>
                    }
                  </div>
                </div>

                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                  <p style={{ ...mono, fontSize: 10, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 14 }}>TOP REPOS</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {topRepos.length > 0
                      ? topRepos.map((r) => (
                          <a key={r.name} href={r.html_url} target="_blank" rel="noopener noreferrer"
                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", color: C.text, fontSize: 12, transition: "color .15s", ...mono }}
                            onMouseEnter={(e) => e.currentTarget.style.color = C.accent}
                            onMouseLeave={(e) => e.currentTarget.style.color = C.text}
                          >
                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "75%" }}>{r.name}</span>
                            <span style={{ fontSize: 11, color: C.faint }}>★ {r.stargazers_count}</span>
                          </a>
                        ))
                      : <span style={{ ...mono, fontSize: 12, color: C.faint }}>// no public repos</span>
                    }
                  </div>
                </div>
              </div>

              {/* Contribution graph */}
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <p style={{ ...mono, fontSize: 10, color: C.accent, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 14 }}>CONTRIBUTION ACTIVITY</p>
                <img
                  src={`https://ghchart.rshah.org/4fc1ff/${username}`}
                  alt="GitHub contribution chart"
                  style={{ width: "100%", borderRadius: 4, filter: "brightness(0.85)" }}
                  onError={(e) => e.currentTarget.style.display = "none"}
                />
              </div>

            </div>
          </Fade>
        )}
      </section>
    </>
  );
}