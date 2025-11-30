import React, { useMemo, useState } from "react";
import data from "./constitutionParts.json";

const PART_FILTERS = [
  { code: "", label: "All Parts" },
  { code: "I", label: "Part I – The Union & its Territory" },
  { code: "II", label: "Part II – Citizenship" },
  { code: "III", label: "Part III – Fundamental Rights" },
  { code: "IV", label: "Part IV – DPSPs" },
  { code: "IVA", label: "Part IVA – Fundamental Duties" },
  { code: "V", label: "Part V – Union Government" },
  { code: "VII", label: "Part VII – States in Part B of First Schedule (Repealed)" },
  { code: "IX", label: "Part IX – Panchayats" },
  { code: "IXA", label: "Part IXA – Municipalities" },
  { code: "IXB", label: "Part IXB – Co-operative Societies" }
  // Extend up to Part XXII as you expand constitutionParts.json
];

const UPSC_IMPORTANT_ARTICLES = ["14", "19", "21", "32", "368", "280", "356", "370", "262", "300A"]; // some may not exist yet in JSON

function buildArticlesIndex(parts) {
  const list = [];

  parts.forEach((part) => {
    if (Array.isArray(part.chapters) && part.chapters.length > 0) {
      part.chapters.forEach((chapter) => {
        chapter.articles.forEach((article) => {
          list.push({
            number: article.article_number,
            title: article.article_title,
            partCode: part.part_id,
            partName: part.part_title,
            chapterId: chapter.chapter_id,
            chapterTitle: chapter.chapter_title,
            partRange: part.article_range,
            status: part.status,
            // basic categorisation
            category:
              part.part_id === "III"
                ? "fundamental_right"
                : part.part_id === "IV"
                ? "dpsp"
                : part.part_id === "IVA"
                ? "fundamental_duty"
                : "other",
            // placeholder fields for detail view; can be enriched later
            shortSummary: article.article_title,
            text: "Detailed constitutional text can be added here.",
            simpleMeaning:
              "A simplified explanation of this article can be added here for easier understanding.",
            judgments: [],
            relatedArticles: [],
            amendments: [],
            examNotes: "",
          });
        });
      });
    } else if (Array.isArray(part.articles)) {
      part.articles.forEach((article) => {
        list.push({
          number: article.article_number,
          title: article.article_title,
          partCode: part.part_id,
          partName: part.part_title,
          chapterId: null,
          chapterTitle: null,
          partRange: part.article_range,
          status: part.status,
          category:
            part.part_id === "III"
              ? "fundamental_right"
              : part.part_id === "IV"
              ? "dpsp"
              : part.part_id === "IVA"
              ? "fundamental_duty"
              : "other",
          shortSummary: article.article_title,
          text: "Detailed constitutional text can be added here.",
          simpleMeaning:
            "A simplified explanation of this article can be added here for easier understanding.",
          judgments: [],
          relatedArticles: [],
          amendments: [],
          examNotes: "",
        });
      });
    }
  });

  return list.sort((a, b) => {
    const aNum = parseInt(a.number, 10) || 0;
    const bNum = parseInt(b.number, 10) || 0;
    return aNum - bNum;
  });
}

function categoryBadge(article) {
  let color = "#ccc";
  let label = "Other";
  if (article.category === "fundamental_right") {
    color = "#1976d2";
    label = "Fundamental Right";
  } else if (article.category === "dpsp") {
    color = "#2e7d32";
    label = "DPSP";
  } else if (article.category === "fundamental_duty") {
    color = "#f9a825";
    label = "Fundamental Duty";
  }
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "999px",
        backgroundColor: color,
        color: "white",
        fontSize: "0.72rem",
        marginLeft: "8px",
      }}
    >
      {label}
    </span>
  );
}

export default function Articles() {
  const parts = data.parts;
  const allArticles = useMemo(() => buildArticlesIndex(parts), [parts]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPartCode, setSelectedPartCode] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [compareA, setCompareA] = useState("");
  const [compareB, setCompareB] = useState("");

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      if (selectedPartCode && article.partCode !== selectedPartCode) return false;

      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase().trim();

      const isNumberMatch = article.number.toLowerCase().includes(term);
      const text = `${article.title} ${article.shortSummary} ${article.simpleMeaning}`.toLowerCase();
      const isTextMatch = text.includes(term);

      return isNumberMatch || isTextMatch;
    });
  }, [allArticles, searchTerm, selectedPartCode]);

  const importantArticles = useMemo(
    () =>
      allArticles.filter((a) => UPSC_IMPORTANT_ARTICLES.includes(a.number)),
    [allArticles]
  );

  const compareArticleA = allArticles.find((a) => a.number === compareA) || null;
  const compareArticleB = allArticles.find((a) => a.number === compareB) || null;

  return (
    <div
      className="page-content"
      style={{
        padding: "20px 24px 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#f5f7fb",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Sticky header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          background: "linear-gradient(90deg, #ff9933 0, #ffffff 40%, #138808 100%)",
          borderRadius: "16px",
          padding: "14px 18px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          marginBottom: "16px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "1.4rem",
            color: "#0b2545",
            fontWeight: 700,
          }}
        >
          Constitution Articles Explorer
        </h2>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: "0.9rem",
            color: "#243b53",
          }}
        >
          Quickly search, filter and understand key provisions of the Constitution of India.
        </p>
      </header>

      {/* Search + filter row */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "240px" }}>
          <input
            type="text"
            placeholder="Search by article number, topic, or keyword (e.g., '21', 'Right to Equality')"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid #cbd2e1",
              outline: "none",
              fontSize: "0.95rem",
              boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
            }}
          />
        </div>
        <div style={{ width: "260px", minWidth: "200px" }}>
          <select
            value={selectedPartCode}
            onChange={(e) => setSelectedPartCode(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid #cbd2e1",
              outline: "none",
              fontSize: "0.9rem",
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
            }}
          >
            {PART_FILTERS.map((p) => (
              <option key={p.code || "all"} value={p.code}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.38fr) minmax(0, 0.62fr)",
          gap: "18px",
          alignItems: "flex-start",
        }}
      >
        {/* Left column: articles list */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "12px 12px 10px",
            boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
            maxHeight: "calc(100vh - 210px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1rem",
                color: "#102a43",
                fontWeight: 600,
              }}
            >
              Articles
            </h3>
            <span style={{ fontSize: "0.78rem", color: "#627d98" }}>
              {filteredArticles.length} found
            </span>
          </div>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              paddingRight: "4px",
            }}
          >
            {filteredArticles.length === 0 && (
              <p style={{ fontSize: "0.85rem", color: "#627d98" }}>
                No articles match your search or filters.
              </p>
            )}
            {filteredArticles.map((article) => {
              const isSelected =
                selectedArticle &&
                selectedArticle.partCode === article.partCode &&
                selectedArticle.number === article.number;
              return (
                <button
                  key={`${article.partCode}-${article.number}`}
                  onClick={() => setSelectedArticle(article)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 10px",
                    marginBottom: "8px",
                    borderRadius: "12px",
                    border: isSelected
                      ? "1px solid #0b7285"
                      : "1px solid #e1e7f0",
                    backgroundColor: isSelected ? "#e6f4ff" : "#ffffff",
                    cursor: "pointer",
                    transition: "background 0.15s ease, border-color 0.15s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        color: "#102a43",
                        fontSize: "0.95rem",
                      }}
                    >
                      Article {article.number}
                    </span>
                    {categoryBadge(article)}
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: "#1f2933",
                      marginBottom: 2,
                    }}
                  >
                    {article.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#627d98",
                    }}
                  >
                    Part {article.partCode}: {article.partName}
                    {article.chapterTitle &&
                      ` • Chapter ${article.chapterId}: ${article.chapterTitle}`}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Right column: details, UPSC & related, compare */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            maxHeight: "calc(100vh - 210px)",
          }}
        >
          {/* Selected article details card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "14px 16px",
              boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
              flex: "0 0 auto",
            }}
          >
            <h3
              style={{
                margin: 0,
                marginBottom: 6,
                fontSize: "1.05rem",
                color: "#102a43",
              }}
            >
              Article Details
            </h3>
            {!selectedArticle && (
              <p style={{ fontSize: "0.9rem", color: "#627d98", marginTop: 4 }}>
                Select an article from the left to view its detailed explanation.
              </p>
            )}
            {selectedArticle && (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "1rem",
                        color: "#102a43",
                      }}
                    >
                      Article {selectedArticle.number} – {selectedArticle.title}
                    </h4>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: "0.85rem",
                        color: "#627d98",
                      }}
                    >
                      Part {selectedArticle.partCode}: {selectedArticle.partName}
                      {selectedArticle.chapterTitle &&
                        ` • Chapter ${selectedArticle.chapterId}: ${selectedArticle.chapterTitle}`}
                      {" "}
                      • Articles {selectedArticle.partRange}
                      {selectedArticle.status === "repealed" && " • (Repealed)"}
                    </p>
                  </div>
                  <div>{categoryBadge(selectedArticle)}</div>
                </div>

                <div style={{ marginTop: 8 }}>
                  <h5
                    style={{
                      margin: "6px 0 2px",
                      fontSize: "0.9rem",
                      color: "#102a43",
                    }}
                  >
                    Original Text
                  </h5>
                  <p style={{ fontSize: "0.88rem", color: "#1f2933" }}>
                    {selectedArticle.text}
                  </p>
                </div>

                <div style={{ marginTop: 8 }}>
                  <h5
                    style={{
                      margin: "6px 0 2px",
                      fontSize: "0.9rem",
                      color: "#102a43",
                    }}
                  >
                    Simplified Meaning
                  </h5>
                  <p style={{ fontSize: "0.88rem", color: "#1f2933" }}>
                    {selectedArticle.simpleMeaning}
                  </p>
                </div>

                <div style={{ marginTop: 8 }}>
                  <h5
                    style={{
                      margin: "6px 0 2px",
                      fontSize: "0.9rem",
                      color: "#102a43",
                    }}
                  >
                    Important Supreme Court Judgments
                  </h5>
                  {selectedArticle.judgments && selectedArticle.judgments.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.85rem" }}>
                      {selectedArticle.judgments.map((j) => (
                        <li key={j}>{j}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: "0.82rem", color: "#829ab1" }}>
                      Add landmark cases like Maneka Gandhi, Puttaswamy (Right to Privacy), etc.
                    </p>
                  )}
                </div>

                <div style={{ marginTop: 8 }}>
                  <h5
                    style={{
                      margin: "6px 0 2px",
                      fontSize: "0.9rem",
                      color: "#102a43",
                    }}
                  >
                    Amendments Affecting this Article
                  </h5>
                  {selectedArticle.amendments && selectedArticle.amendments.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.85rem" }}>
                      {selectedArticle.amendments.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: "0.82rem", color: "#829ab1" }}>
                      Mention constitutional amendments here that modified this article.
                    </p>
                  )}
                </div>

                <div style={{ marginTop: 8 }}>
                  <h5
                    style={{
                      margin: "6px 0 2px",
                      fontSize: "0.9rem",
                      color: "#102a43",
                    }}
                  >
                    Exam Notes / Key Points
                  </h5>
                  {selectedArticle.examNotes ? (
                    <p style={{ fontSize: "0.88rem", color: "#1f2933" }}>
                      {selectedArticle.examNotes}
                    </p>
                  ) : (
                    <p style={{ fontSize: "0.82rem", color: "#829ab1" }}>
                      Use this space for quick revision notes and key points for exams.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* UPSC & Related section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
              gap: "10px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "10px 12px",
                boxShadow: "0 4px 12px rgba(15,23,42,0.06)",
              }}
            >
              <h4
                style={{
                  margin: 0,
                  marginBottom: 4,
                  fontSize: "0.95rem",
                  color: "#102a43",
                }}
              >
                Important for UPSC
              </h4>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "0.8rem",
                  color: "#829ab1",
                }}
              >
                Quickly jump to high-yield articles.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {importantArticles.map((article) => (
                  <button
                    key={article.number}
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    style={{
                      padding: "4px 9px",
                      borderRadius: "999px",
                      border: "1px solid #d97706",
                      background: "#fff7ed",
                      fontSize: "0.78rem",
                      cursor: "pointer",
                      color: "#92400e",
                    }}
                  >
                    Art. {article.number}
                  </button>
                ))}
                {importantArticles.length === 0 && (
                  <span style={{ fontSize: "0.8rem", color: "#9fb3c8" }}>
                    Add more important articles to the JSON to see them here.
                  </span>
                )}
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "10px 12px",
                boxShadow: "0 4px 12px rgba(15,23,42,0.06)",
              }}
            >
              <h4
                style={{
                  margin: 0,
                  marginBottom: 4,
                  fontSize: "0.95rem",
                  color: "#102a43",
                }}
              >
                Related Articles
              </h4>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "0.8rem",
                  color: "#829ab1",
                }}
              >
                Explore articles conceptually linked with the selected one.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {selectedArticle &&
                selectedArticle.relatedArticles &&
                selectedArticle.relatedArticles.length > 0 ? (
                  selectedArticle.relatedArticles.map((num) => {
                    const rel = allArticles.find((a) => a.number === num);
                    if (!rel) return null;
                    return (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setSelectedArticle(rel)}
                        style={{
                          padding: "4px 9px",
                          borderRadius: "999px",
                          border: "1px solid #0b7285",
                          background: "#e3f8ff",
                          fontSize: "0.78rem",
                          cursor: "pointer",
                          color: "#065f46",
                        }}
                      >
                        Art. {num}
                      </button>
                    );
                  })
                ) : (
                  <span style={{ fontSize: "0.8rem", color: "#9fb3c8" }}>
                    Add related article numbers to your data to show them here.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Compare Articles panel */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "10px 12px 12px",
              boxShadow: "0 4px 12px rgba(15,23,42,0.06)",
              flex: "0 0 auto",
            }}
          >
            <h3
              style={{
                margin: 0,
                marginBottom: 6,
                fontSize: "0.98rem",
                color: "#102a43",
              }}
            >
              Compare Articles
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                gap: "8px",
                marginBottom: 6,
              }}
            >
              <select
                value={compareA}
                onChange={(e) => setCompareA(e.target.value)}
                style={{
                  padding: "7px 10px",
                  borderRadius: "10px",
                  border: "1px solid #cbd2e1",
                  fontSize: "0.85rem",
                  background: "#ffffff",
                }}
              >
                <option value="">Article A</option>
                {allArticles.map((a) => (
                  <option key={`A-${a.number}`} value={a.number}>
                    Article {a.number} – {a.title}
                  </option>
                ))}
              </select>
              <select
                value={compareB}
                onChange={(e) => setCompareB(e.target.value)}
                style={{
                  padding: "7px 10px",
                  borderRadius: "10px",
                  border: "1px solid #cbd2e1",
                  fontSize: "0.85rem",
                  background: "#ffffff",
                }}
              >
                <option value="">Article B</option>
                {allArticles.map((a) => (
                  <option key={`B-${a.number}`} value={a.number}>
                    Article {a.number} – {a.title}
                  </option>
                ))}
              </select>
            </div>

            {compareArticleA && compareArticleB && (
              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid #e1e7f0",
                  padding: "8px 8px 6px",
                  fontSize: "0.8rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                    gap: "8px",
                  }}
                >
                  {[compareArticleA, compareArticleB].map((art, idx) => (
                    <div key={art.number}>
                      <strong>
                        {idx === 0 ? "Article A" : "Article B"}: {art.number} – {art.title}
                      </strong>
                      <div style={{ color: "#627d98", marginTop: 2 }}>
                        Part {art.partCode} – {art.partName}
                      </div>
                      <ul
                        style={{
                          margin: "4px 0 0",
                          paddingLeft: "16px",
                          color: "#1f2933",
                        }}
                      >
                        <li>
                          Category: {" "}
                          {art.category === "fundamental_right"
                            ? "Fundamental Right"
                            : art.category === "dpsp"
                            ? "DPSP"
                            : art.category === "fundamental_duty"
                            ? "Fundamental Duty"
                            : "Other"}
                        </li>
                        <li>Focus: {art.simpleMeaning}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}