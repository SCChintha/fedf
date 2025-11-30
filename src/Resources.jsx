import React, { useMemo, useState } from "react";

const FILTERS = [
  "All",
  "PDFs & Notes",
  "Summaries",
  "Infographics",
  "Topics",
  "Videos",
  "Books",
  "Official Links",
  "Beginner",
  "Intermediate",
  "UPSC",
];

const downloadableMaterials = [
  {
    type: "PDFs & Notes",
    title: "Constitution Bare Act (Latest)",
    description: "Official text of the Constitution of India with all amendments.",
    tags: ["Bare Act", "UPSC"],
    link:
      "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf",
  },
  {
    type: "PDFs & Notes",
    title: "Fundamental Rights Notes",
    description: "Crisp, exam-oriented notes on Articles 12–35.",
    tags: ["Short Notes", "Fundamental Rights", "Beginner"],
    link: "https://www.mea.gov.in/images/pdf1/part3.pdf",
  },
  {
    type: "PDFs & Notes",
    title: "Directive Principles (DPSPs) Notes",
    description: "One-page summary of Articles 36–51 with case laws.",
    tags: ["DPSP", "UPSC"],
    link: "https://www.mea.gov.in/images/pdf1/part4.pdf",
  },
  {
    type: "PDFs & Notes",
    title: "Amendments List PDF",
    description: "Chronological list of all constitutional amendments.",
    tags: ["Amendments", "UPSC"],
    link: "https://legislative.gov.in/the-constitution-amendment-acts/",
  },
  // {
  //   type: "PDFs & Notes",
  //   title: "Landmark Judgments Summary",
  //   description: "Key Supreme Court cases on basic structure, rights, and federalism.",
  //   tags: ["Judgments", "UPSC", "Intermediate"],
  //   link: "#",
  // },
];

const constitutionSummaryCards = [
  {
    id: "III",
    title: "Part III — Fundamental Rights",
    description: "Guarantees basic civil and political rights that protect individual liberty against State action.",
  },
  {
    id: "IV",
    title: "Part IV — Directive Principles of State Policy",
    description: "Guiding principles for the State to establish a just social and economic order.",
  },
  {
    id: "IVA",
    title: "Part IVA — Fundamental Duties",
    description: "Moral and civic obligations of citizens towards the nation.",
  },
];

const visualInfographics = [
  {
    title: "Structure of the Constitution",
    description: "Visual overview of Parts, Schedules, and Articles.",
  },
  {
    title: "Fundamental Rights Chart",
    description: "Rights, corresponding Articles, and reasonable restrictions.",
  },
  {
    title: "Distribution of Powers",
    description: "Union, State, and Concurrent Lists explained.",
  },
  {
    title: "Emergency Provisions",
    description: "National, State, and Financial Emergencies at a glance.",
  },
  {
    title: "Constitutional vs. Non-Constitutional Bodies",
    description: "Key bodies and their constitutional status.",
  },
  {
    title: "Amendment Process Flowchart",
    description: "Step-by-step process to amend the Constitution.",
  },
];

const topics = [
  {
    title: "Basic Structure Doctrine",
    description: "Why Parliament cannot destroy the core identity of the Constitution.",
  },
  {
    title: "Writs under Articles 32 & 226",
    description: "Habeas corpus, mandamus, certiorari, prohibition, quo warranto.",
  },
  {
    title: "Fundamental Duties",
    description: "Citizens' responsibilities towards the nation and society.",
  },
  {
    title: "Types of Majorities",
    description: "Simple, absolute, effective, and special majorities explained.",
  },
  {
    title: "Seventh Schedule Lists",
    description: "What falls under Union, State, and Concurrent Lists.",
  },
  {
    title: "Finance Commission",
    description: "Distribution of tax revenues between Centre and States.",
  },
  {
    title: "Ordinance Making Power",
    description: "How the President and Governors issue ordinances.",
  },
];

const externalLinks = [
  {
    title: "India Code",
    description: "Official repository of all central Acts, including the Constitution.",
    url: "https://www.indiacode.nic.in/",
  },
  {
    title: "Ministry of Law & Justice",
    description: "Official site for legislative and legal updates.",
    url: "https://legislative.gov.in/",
  },
  {
    title: "Supreme Court of India",
    description: "Search Supreme Court judgments and daily orders.",
    url: "https://main.sci.gov.in/",
  },
  {
    title: "Parliament of India",
    description: "Lok Sabha and Rajya Sabha official portals.",
    url: "https://loksabha.nic.in/",
  },
  {
    title: "PIB – Press Information Bureau",
    description: "Official news releases and government updates.",
    url: "https://pib.gov.in/",
  },
];

const videos = [
  {
    title: "NCERT Constitution Basics",
    duration: "25 min",
    category: "Basics",
  },
  {
    title: "Toppers Explain Key Articles",
    duration: "30 min",
    category: "Toppers",
  },
  {
    title: "Professors on Fundamental Rights",
    duration: "40 min",
    category: "Lectures",
  },
  {
    title: "Animated Constitution Explained",
    duration: "18 min",
    category: "Animated",
  },
];

const books = [
  {
    title: "Laxmikanth – Indian Polity",
    author: "M. Laxmikanth",
    description: "Most popular book for Indian Polity for UPSC.",
    suitableFor: "UPSC, State PCS",
  },
  {
    title: "Introduction to the Constitution of India",
    author: "D.D. Basu",
    description: "Conceptual understanding of constitutional provisions.",
    suitableFor: "Law students, advanced learners",
  },
  {
    title: "Our Parliament",
    author: "Subhash Kashyap",
    description: "Simple explanation of how Parliament works.",
    suitableFor: "Beginners, school students",
  },
  {
    title: "Constitution of India – Bare Act",
    author: "P.M. Bakshi",
    description: "Pocket-sized bare act with index and references.",
    suitableFor: "Law students, practitioners",
  },
  {
    title: "NCERT Civics (Class 9–12)",
    author: "NCERT",
    description: "Foundation texts explaining democracy, rights, and institutions.",
    suitableFor: "Beginners, school students",
  },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeInfographic, setActiveInfographic] = useState(null);
  const [activePartSummary, setActivePartSummary] = useState(null);

  const filteredMaterials = useMemo(() => {
    return downloadableMaterials.filter((item) => {
      const matchesFilter =
        activeFilter === "All" ||
        item.type === activeFilter ||
        item.tags?.includes(activeFilter);

      if (!matchesFilter) return false;

      if (!searchTerm.trim()) return true;
      const t = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(t) ||
        item.description.toLowerCase().includes(t) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(t))
      );
    });
  }, [searchTerm, activeFilter]);

  return (
    <div
      style={{
        padding: "20px 24px 32px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#f5f7fb",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Sticky top header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 4,
          padding: "14px 18px 18px",
          borderRadius: "16px",
          background: "linear-gradient(90deg, #ff9933 0, #ffffff 40%, #138808 100%)",
          boxShadow: "0 6px 16px rgba(15,23,42,0.12)",
          marginBottom: "16px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "1.5rem",
            color: "#0b2545",
            fontWeight: 700,
          }}
        >
          Resources & Study Materials
        </h1>
        <p
          style={{
            margin: "4px 0 10px",
            fontSize: "0.95rem",
            color: "#243b53",
          }}
        >
          Download notes, explore summaries, videos, infographics, and more.
        </p>

        {/* Search bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search resources, PDFs, topics…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "640px",
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid #cbd2e1",
              fontSize: "0.95rem",
              boxShadow: "0 1px 6px rgba(15,23,42,0.1)",
              outline: "none",
            }}
          />
        </div>

        {/* Filter chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          {FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  border: isActive ? "1px solid #0b7285" : "1px solid rgba(15,23,42,0.1)",
                  background: isActive ? "#e3f8ff" : "rgba(255,255,255,0.8)",
                  color: "#102a43",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  transition: "background 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease",
                  boxShadow: isActive
                    ? "0 2px 6px rgba(15,23,42,0.16)"
                    : "0 1px 3px rgba(15,23,42,0.08)",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </header>

      {/* SECTION 1 — Downloadable Study Materials */}
      <section style={{ marginTop: "16px", marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "1.1rem",
              color: "#102a43",
            }}
          >
            Downloadable Study Materials
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "14px",
            marginTop: "10px",
          }}
        >
          {filteredMaterials.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 14px",
                boxShadow: "0 4px 12px rgba(15,23,42,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 10,
                    background: "#e5f3ff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    color: "#1d4ed8",
                  }}
                >
                  📄
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "0.98rem",
                    color: "#102a43",
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <p
                style={{
                  margin: "4px 0 6px",
                  fontSize: "0.86rem",
                  color: "#4b5563",
                }}
              >
                {item.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 6px" }}>
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem",
                      padding: "2px 7px",
                      borderRadius: "999px",
                      background: "#eff6ff",
                      color: "#1d4ed8",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "6px" }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 10px",
                    borderRadius: "999px",
                    border: "1px solid #0f766e",
                    background: "#ecfdf3",
                    color: "#065f46",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                  }}
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 — Constitution Summary by Parts */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: "1.1rem",
            color: "#102a43",
          }}
        >
          Constitution Summary by Parts
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {constitutionSummaryCards.map((part) => (
            <div
              key={part.id}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 14px",
                boxShadow: "0 4px 12px rgba(15,23,42,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "999px",
                    background: "#e0f2fe",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    color: "#0369a1",
                  }}
                >
                  📚
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "0.96rem",
                    color: "#102a43",
                  }}
                >
                  {part.title}
                </h3>
              </div>
              <p
                style={{
                  margin: "4px 0 8px",
                  fontSize: "0.85rem",
                  color: "#4b5563",
                }}
              >
                {part.description}
              </p>
              <button
                type="button"
                onClick={() => setActivePartSummary(part)}
                style={{
                  alignSelf: "flex-start",
                  padding: "5px 10px",
                  borderRadius: "999px",
                  border: "1px solid #0b7285",
                  background: "#e3f8ff",
                  color: "#064e3b",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                Read Summary →
              </button>
            </div>
          ))}
        </div>

        {/* Inline overlay for Part summary */}
        {activePartSummary && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px 14px",
              borderRadius: "16px",
              background: "#ffffff",
              boxShadow: "0 6px 16px rgba(15,23,42,0.16)",
              border: "1px solid #0b7285",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    color: "#102a43",
                  }}
                >
                  {activePartSummary.title}
                </h3>
                <p
                  style={{
                    margin: "4px 0 8px",
                    fontSize: "0.86rem",
                    color: "#4b5563",
                  }}
                >
                  {activePartSummary.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePartSummary(null)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  color: "#6b7280",
                }}
              >
                 d7
              </button>
            </div>
            <div
              style={{
                fontSize: "0.84rem",
                color: "#4b5563",
                lineHeight: 1.5,
              }}
            >
              <p style={{ margin: "0 0 4px" }}>
                <strong>Overview:</strong> This Part of the Constitution lays down a structured
                framework for how the State and citizens interact within its subject area.
              </p>
              <p style={{ margin: "0 0 4px" }}>
                <strong>Key Articles:</strong> Highlight the most important Articles from this
                Part (for example, Articles 12	35 for Fundamental Rights, 36	51 for DPSPs,
                or 51A for Duties).
              </p>
              <p style={{ margin: 0 }}>
                <strong>Study Tip:</strong> Break this Part into smaller themes (rights, duties,
                principles) and connect them with landmark Supreme Court cases to remember them
                better for exams.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 3 — Visual Learning (Infographics & Maps) */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: "1.1rem",
            color: "#102a43",
          }}
        >
          Visual Learning – Infographics & Maps
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {visualInfographics.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveInfographic(item)}
              style={{
                background: "linear-gradient(135deg, #e0f2fe, #fef3c7)",
                borderRadius: "16px",
                padding: "14px 14px 12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(15,23,42,0.12)",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  height: 90,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.65)",
                  marginBottom: 8,
                }}
              />
              <h3
                style={{
                  margin: 0,
                  fontSize: "0.96rem",
                  color: "#102a43",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "0.85rem",
                  color: "#374151",
                }}
              >
                {item.description}
              </p>
            </button>
          ))}
        </div>

        {/* Simple modal for infographic preview */}
        {activeInfographic && (
          <div
            onClick={() => setActiveInfographic(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(15,23,42,0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(90vw, 720px)",
                maxHeight: "80vh",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "14px 16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    color: "#102a43",
                  }}
                >
                  {activeInfographic.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveInfographic(null)}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                  }}
                >
                  ✕
                </button>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.86rem",
                  color: "#4b5563",
                }}
              >
                {activeInfographic.description}
              </p>
              <div
                style={{
                  flex: 1,
                  marginTop: 6,
                  borderRadius: 12,
                  background: "#e5f3ff",
                }}
              />
            </div>
          </div>
        )}
      </section>

      {/* SECTION 4 — Frequently Asked Topics */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: "1.1rem",
            color: "#102a43",
          }}
        >
          Frequently Asked Topics
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "10px",
          }}
        >
          {topics.map((topic) => (
            <div
              key={topic.title}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 12px",
                boxShadow: "0 3px 10px rgba(15,23,42,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "999px",
                    background: "#eef2ff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    color: "#4c1d95",
                  }}
                >
                  📌
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "#102a43",
                  }}
                >
                  {topic.title}
                </h3>
              </div>
              <p
                style={{
                  margin: "2px 0 6px",
                  fontSize: "0.84rem",
                  color: "#4b5563",
                }}
              >
                {topic.description}
              </p>
              <button
                type="button"
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 9px",
                  borderRadius: "999px",
                  border: "1px solid #0b7285",
                  background: "#e3f8ff",
                  color: "#065f46",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                }}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — External Resources & Official Links */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: "1.1rem",
            color: "#102a43",
          }}
        >
          External Resources & Official Links
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "10px",
          }}
        >
          {externalLinks.map((link) => (
            <div
              key={link.title}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 12px",
                boxShadow: "0 3px 10px rgba(15,23,42,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "6px",
                    background: "#e5f3ff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    color: "#1d4ed8",
                  }}
                >
                  🔗
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "#102a43",
                  }}
                >
                  {link.title}
                </h3>
              </div>
              <p
                style={{
                  margin: "2px 0 6px",
                  fontSize: "0.84rem",
                  color: "#4b5563",
                }}
              >
                {link.description}
              </p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 9px",
                  borderRadius: "999px",
                  border: "1px solid #0b7285",
                  background: "#e3f8ff",
                  color: "#065f46",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                }}
              >
                Open in new tab →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — Video Lectures */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: "1.1rem",
            color: "#102a43",
          }}
        >
          Video Lectures
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "10px",
          }}
        >
          {videos.map((video) => (
            <div
              key={video.title}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 12px",
                boxShadow: "0 3px 10px rgba(15,23,42,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  height: 140,
                  background: "#0f172a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f9fafb",
                }}
              >
                ▶
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  color: "#102a43",
                }}
              >
                {video.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  color: "#6b7280",
                }}
              >
                {video.category} • {video.duration}
              </p>
              <button
                type="button"
                style={{
                  marginTop: 4,
                  alignSelf: "flex-start",
                  padding: "4px 9px",
                  borderRadius: "999px",
                  border: "1px solid #0b7285",
                  background: "#e3f8ff",
                  color: "#065f46",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                }}
              >
                Play on YouTube →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — Recommended Books */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: "1.1rem",
            color: "#102a43",
          }}
        >
          Recommended Books
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "10px",
          }}
        >
          {books.map((book) => (
            <div
              key={book.title}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 12px",
                boxShadow: "0 3px 10px rgba(15,23,42,0.08)",
                display: "flex",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 54,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #fee2e2, #f97316)",
                }}
              />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "#102a43",
                  }}
                >
                  {book.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "#4b5563",
                  }}
                >
                  by {book.author}
                </p>
                <p
                  style={{
                    margin: "2px 0",
                    fontSize: "0.82rem",
                    color: "#4b5563",
                  }}
                >
                  {book.description}
                </p>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "#2563eb",
                  }}
                >
                  Suitable for: {book.suitableFor}
                </span>
                <button
                  type="button"
                  style={{
                    marginTop: 6,
                    alignSelf: "flex-start",
                    padding: "4px 9px",
                    borderRadius: "999px",
                    border: "1px solid #0b7285",
                    background: "#e3f8ff",
                    color: "#065f46",
                    fontSize: "0.78rem",
                    cursor: "pointer",
                  }}
                >
                  Download book →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM SECTION — Smart Suggestions */}
      <section>
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: "1.05rem",
            color: "#102a43",
          }}
        >
          Smart Suggestions
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {["Most downloaded", "Trending topics", "Suggested for UPSC 2025", "Recently added"].map(
            (label) => (
              <span
                key={label}
                style={{
                  padding: "5px 10px",
                  borderRadius: "999px",
                  background: "#e5f3ff",
                  fontSize: "0.8rem",
                  color: "#1d4ed8",
                }}
              >
                {label}
              </span>
            )
          )}
        </div>
      </section>
    </div>
  );
}