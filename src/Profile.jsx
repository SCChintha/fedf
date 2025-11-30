import React from "react";

export default function Profile({ user }) {
  const isLoggedIn = !!user;

  const stats = {
    articlesRead: 12,
    quizzesTaken: 5,
    accuracy: 78,
    notesSaved: 4,
    pdfsDownloaded: 9,
  };

  const bookmarkedArticles = [
    { number: "14", title: "Equality Before Law", tag: "Fundamental Right" },
    { number: "21", title: "Protection of Life & Personal Liberty", tag: "Fundamental Right" },
  ];

  const savedNotes = [
    {
      title: "Right to Equality – quick revision",
      preview: "Covers Articles 14–18 with key case laws...",
      article: "Article 14",
      lastEdited: "28 Nov 2025",
    },
  ];

  const savedResources = [
    { type: "PDF", title: "Constitution Bare Act", action: "Download" },
    { type: "Video", title: "Fundamental Rights Lecture", action: "Play" },
  ];

  const quizHistory = [
    {
      title: "Fundamental Rights Quiz",
      score: "8/10",
      time: "12 min",
      difficulty: "Intermediate",
      badge: "Rights Explorer",
    },
  ];

  const badges = [
    { name: "Constitution Explorer", desc: "Read 25 articles" },
    { name: "Daily Learner", desc: "Logged in 7 days in a row" },
  ];

  const recentlyViewed = [
    "Article 14 – Equality Before Law",
    "Article 21 – Life & Personal Liberty",
    "Part III – Fundamental Rights Summary",
    "Fundamental Duties Overview",
  ];

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "20px 24px" }}>
        <h2>User Profile</h2>
        <p>You are not logged in. Please log in to see your profile and learning progress.</p>
      </div>
    );
  }

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
      {/* 1. Basic User Information */}
      <section
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          padding: "14px 16px",
          boxShadow: "0 6px 16px rgba(15,23,42,0.08)",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "999px",
            background: "linear-gradient(135deg, #ff9933, #138808)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "1.2rem",
          }}
        >
          {user.firstName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#102a43" }}>
            {user.firstName} {user.lastName}
          </h2>
          <p style={{ margin: "2px 0", fontSize: "0.9rem", color: "#4b5563" }}>{user.email}</p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#6b7280" }}>
            Role: <strong>{user.role}</strong> • Joined: <span>Nov 2025</span>
          </p>
        </div>
        <button
          type="button"
          style={{
            padding: "6px 12px",
            borderRadius: "999px",
            border: "1px solid #0b7285",
            background: "#e3f8ff",
            color: "#065f46",
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
      </section>

      {/* 2. Learning Progress / Activity Summary */}
      <section
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          padding: "12px 14px",
          boxShadow: "0 4px 12px rgba(15,23,42,0.06)",
          marginBottom: "16px",
        }}
      >
        <h3 style={{ margin: 0, marginBottom: 8, fontSize: "1rem", color: "#102a43" }}>
          Learning Progress
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "10px",
          }}
        >
          {[
            { label: "Articles Read", value: stats.articlesRead },
            { label: "Quizzes Taken", value: stats.quizzesTaken },
            { label: "Accuracy", value: `${stats.accuracy}%` },
            { label: "Notes Saved", value: stats.notesSaved },
            { label: "PDFs Downloaded", value: stats.pdfsDownloaded },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 4,
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{card.label}</span>
              <strong style={{ fontSize: "1rem", color: "#111827" }}>{card.value}</strong>
              {card.label === "Accuracy" && (
                <div
                  style={{
                    marginTop: 4,
                    width: 40,
                    height: 40,
                    borderRadius: "999px",
                    border: "4px solid #e5e7eb",
                    borderTopColor: "#0b7285",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bookmarked Articles & 4. Saved Notes */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: 12,
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "10px 12px",
            boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <h3 style={{ margin: 0, fontSize: "0.98rem", color: "#102a43" }}>Bookmarked Articles</h3>
            <button
              type="button"
              style={{
                padding: "3px 8px",
                borderRadius: "999px",
                border: "1px solid #0b7285",
                background: "#e3f8ff",
                color: "#065f46",
                fontSize: "0.75rem",
                cursor: "pointer",
              }}
            >
              View all
            </button>
          </div>
          {bookmarkedArticles.length === 0 ? (
            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>No bookmarks yet.</p>
          ) : (
            bookmarkedArticles.map((art) => (
              <div
                key={art.number}
                style={{
                  padding: "6px 0",
                  borderBottom: "1px solid #e5e7eb",
                  fontSize: "0.85rem",
                }}
              >
                <strong>Article {art.number}</strong> – {art.title}
                <div style={{ fontSize: "0.78rem", color: "#6b7280" }}>{art.tag}</div>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "10px 12px",
            boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <h3 style={{ margin: 0, fontSize: "0.98rem", color: "#102a43" }}>Saved Notes</h3>
            <button
              type="button"
              style={{
                padding: "3px 8px",
                borderRadius: "999px",
                border: "1px solid #0b7285",
                background: "#e3f8ff",
                color: "#065f46",
                fontSize: "0.75rem",
                cursor: "pointer",
              }}
            >
              Create new note
            </button>
          </div>
          {savedNotes.length === 0 ? (
            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>No notes saved yet.</p>
          ) : (
            savedNotes.map((note) => (
              <div
                key={note.title}
                style={{
                  padding: "6px 0",
                  borderBottom: "1px solid #e5e7eb",
                  fontSize: "0.84rem",
                }}
              >
                <strong>{note.title}</strong>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>{note.preview}</div>
                <div style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
                  {note.article} • Last edited {note.lastEdited}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 5. Saved Resources & 6. Quiz History */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: 12,
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "10px 12px",
            boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          }}
        >
          <h3 style={{ margin: 0, marginBottom: 6, fontSize: "0.98rem", color: "#102a43" }}>
            Saved Resources
          </h3>
          {savedResources.length === 0 ? (
            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>No resources saved yet.</p>
          ) : (
            savedResources.map((res) => (
              <div
                key={res.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "6px 0",
                  borderBottom: "1px solid #e5e7eb",
                  fontSize: "0.84rem",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.78rem", color: "#9ca3af", marginRight: 6 }}>
                    {res.type}
                  </span>
                  {res.title}
                </div>
                <button
                  type="button"
                  style={{
                    padding: "3px 8px",
                    borderRadius: "999px",
                    border: "1px solid #0b7285",
                    background: "#e3f8ff",
                    color: "#065f46",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  {res.action}
                </button>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "10px 12px",
            boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          }}
        >
          <h3 style={{ margin: 0, marginBottom: 6, fontSize: "0.98rem", color: "#102a43" }}>
            Quiz History & Results
          </h3>
          {quizHistory.length === 0 ? (
            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>No quizzes taken yet.</p>
          ) : (
            quizHistory.map((quiz) => (
              <div
                key={quiz.title}
                style={{
                  padding: "6px 0",
                  borderBottom: "1px solid #e5e7eb",
                  fontSize: "0.84rem",
                }}
              >
                <strong>{quiz.title}</strong>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                  Score: {quiz.score} • Time: {quiz.time} • {quiz.difficulty}
                </div>
                {quiz.badge && (
                  <div style={{ fontSize: "0.78rem", color: "#f97316" }}>Badge: {quiz.badge}</div>
                )}
                <button
                  type="button"
                  style={{
                    marginTop: 4,
                    padding: "3px 8px",
                    borderRadius: "999px",
                    border: "1px solid #0b7285",
                    background: "#e3f8ff",
                    color: "#065f46",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  Retake Quiz
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 7. Badges / Achievements & 8. Recently Viewed */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: 12,
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "10px 12px",
            boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          }}
        >
          <h3 style={{ margin: 0, marginBottom: 6, fontSize: "0.98rem", color: "#102a43" }}>
            Badges & Achievements
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {badges.map((b) => (
              <div
                key={b.name}
                style={{
                  minWidth: 120,
                  padding: "6px 8px",
                  borderRadius: 10,
                  background: "#fff7ed",
                  border: "1px solid #fed7aa",
                  fontSize: "0.8rem",
                  color: "#92400e",
                }}
              >
                <strong>{b.name}</strong>
                <div style={{ fontSize: "0.75rem" }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "10px 12px",
            boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          }}
        >
          <h3 style={{ margin: 0, marginBottom: 6, fontSize: "0.98rem", color: "#102a43" }}>
            Recently Viewed
          </h3>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: "0.84rem", color: "#4b5563" }}>
            {recentlyViewed.map((item) => (
              <li key={item} style={{ padding: "2px 0" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Account Settings */}
      <section
        style={{
          background: "#ffffff",
          borderRadius: "14px",
          padding: "10px 12px",
          boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
        }}
      >
        <h3 style={{ margin: 0, marginBottom: 6, fontSize: "0.98rem", color: "#102a43" }}>
          Account Settings
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            fontSize: "0.85rem",
          }}
        >
          {[
            "Edit Profile",
            "Change Password",
            "Privacy Settings",
            "Notification Preferences",
            "Delete Account",
          ].map((label) => (
            <button
              key={label}
              type="button"
              style={{
                padding: "5px 10px",
                borderRadius: "999px",
                border: "1px solid #e5e7eb",
                background: "#f9fafb",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}