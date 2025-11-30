//changed dashboard
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add this import
import "./Dashboard.css";

// Sample data - Move to separate data file later
const quickFacts = [
  "The Indian Constitution is the longest written Constitution in the world.",
  "It took 2 years, 11 months and 18 days to complete the Constitution.",
  "The original Constitution had 395 Articles and 8 Schedules.",
  "Dr. B.R. Ambedkar is known as the Father of Indian Constitution.",
  "The Constituent Assembly first met on 9 December 1946.",
  "The Constitution of India came into force on 26 January 1950.",
  "The Preamble was amended only once, by the 42nd Amendment Act, 1976.",
  "Originally, the Preamble did not contain the words 'Socialist' and 'Secular'.",
  "The national flag was adopted by the Constituent Assembly on 22 July 1947.",
  "The Constitution was originally handwritten in English and Hindi, not printed.",
  "The original handwritten Constitution is kept in special helium-filled cases in the Parliament Library.",
  "Fundamental Duties were added to the Constitution by the 42nd Amendment in 1976.",
  "The Indian Constitution is partly rigid and partly flexible.",
  "Article 32 is called the 'heart and soul' of the Constitution by Dr. Ambedkar.",
  "The 73rd and 74th Amendments gave constitutional status to Panchayats and Municipalities.",
  "The 52nd Amendment introduced the Anti-Defection Law.",
  "The 61st Amendment reduced the voting age from 21 years to 18 years.",
  "The Eighth Schedule lists the recognized languages of India.",
  "The basic structure doctrine was evolved in the Kesavananda Bharati case (1973).",
  "The right to property is now a legal right under Article 300A, not a Fundamental Right.",
  "The Ninth Schedule was added by the First Amendment to protect certain laws from judicial review.",
  "India follows a parliamentary system of government, borrowed from the British model.",
  "The office of the Comptroller and Auditor General (CAG) is mentioned in Part V of the Constitution.",
];

const recentAmendments = [
  {
    number: "104th",
    year: "2019",
    summary: "Extension of reservation for SC/ST in Parliament",
  },
  {
    number: "103rd",
    year: "2019",
    summary: "Introduced EWS reservation of 10%",
  },
];

const importantCases = [
  {
    name: "Kesavananda Bharati v. State of Kerala (1973)",
    key: "kesavananda",
    brief:
      "Established the Basic Structure doctrine, limiting Parliament's power to amend the Constitution.",
    image: "https://images.indianexpress.com/2023/04/kes.jpg?resize=600%2C526", // place your image here
  },
  {
    name: "Golaknath v. State of Punjab (1967)",
    key: "golaknath",
    brief:
      "Held that Parliament could not amend Fundamental Rights, later balanced by the Basic Structure doctrine.",
    image: "https://ih1.redbubble.net/image.4354856867.2198/fposter%2Csmall%2Cwall_texture%2Cproduct%2C750x1000.jpg",
  },
  {
    name: "Maneka Gandhi v. Union of India (1978)",
    key: "maneka-gandhi",
    brief:
      "Expanded the meaning of Article 21 and linked it with Articles 14 and 19, strengthening due process.",
    image: "https://judgementsincriminallaw.wordpress.com/wp-content/uploads/2020/07/img_20200717_225828.jpg",
  },
  {
    name: "S.R. Bommai v. Union of India (1994)",
    key: "sr-bommai",
    brief:
      "Clarified limits on President's Rule and reinforced federalism as part of the basic structure.",
    image: "https://legalvidhiya.com/wp-content/uploads/2023/09/Screenshot-2023-09-04-at-12.16.44-PM.png",
  },
];

// Add this constant at the top with other constants
const preambleText = `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:

JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity; and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;

IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`;

export default function Dashboard() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentFact, setCurrentFact] = useState(0);
  const [isPreambleExpanded, setIsPreambleExpanded] = useState(false);

  const handleDownloadPreamble = () => {
    const blob = new Blob([preambleText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "preamble_of_constitution_of_india.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Click handler for quick navigation and case links
  const handleNavClick = (section) => {
    switch (section) {
      case "Articles":
        navigate("/articles");
        break;
      case "Parts":
        navigate("/articles");
        break;
      case "Schedules":
        navigate("/articles");
        break;
      case "Amendments":
        navigate("/articles");
        break;
      case "Case Studies":
        navigate("/resources");
        break;
      case "Quiz":
        navigate("/quiz");
        break;
      default:
        console.log(`Unhandled navigation section: ${section}`);
    }
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Indian Constitution Dashboard</h1>
          <div className="header-controls">
            <input
              type="search"
              placeholder="Search articles, amendments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-grid">
        {/* Preamble Section */}
        <section className="preamble-card">
          <h2>Preamble to the Constitution of India</h2>
          <div className="preamble-scroll-container">
            <div className={`preamble-content ${isPreambleExpanded ? 'expanded' : ''}`}>
              <p>{preambleText}</p>
            </div>
          </div>
          <div className="preamble-actions">
            <button 
              className="expand-button"
              onClick={() => setIsPreambleExpanded(!isPreambleExpanded)}
            >
              {isPreambleExpanded ? 'Show Less' : 'Read Full Preamble'}
            </button>
            <button 
              className="download-button"
              onClick={handleDownloadPreamble}
            >
              Download Preamble
            </button>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="quick-nav">
          <h2>Quick Navigation</h2>
          <div className="nav-tiles">
            {["Articles", "Parts", "Schedules", "Amendments", "Case Studies", "Quiz"].map((section) => (
              <div 
                key={section}
                className="nav-tile"
                onClick={() => handleNavClick(section)}
                role="button"
                tabIndex={0}
              >
                {section}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Sections */}
        <section className="featured-sections">
          {[
            {
              title: "Fundamental Rights",
              description: "Articles 12-35 in Part III of Constitution",
              path: "https://www.mea.gov.in/images/pdf1/part3.pdf"
            },
            {
              title: "Directive Principles",
              description: "Articles 36-51 in Part IV of Constitution",
              path: "https://www.mea.gov.in/images/pdf1/part4.pdf",
            },
            {
              title: "Fundamental Duties",
              description: "Article 51A in Part IVA of Constitution",
              path: "https://dsel.education.gov.in/sites/default/files/Fundamental-Duties-English.pdf",
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to={feature.path} className="read-more">
                Read More
              </Link>
            </div>
          ))}
        </section>

        {/* Recent Amendments */}
        <section className="amendments-section">
          <h2>Recent Amendments</h2>
          <div className="amendments-timeline">
            {recentAmendments.map((amendment, index) => (
              <div key={index} className="amendment-card">
                <h4>{amendment.number} Amendment</h4>
                <p className="year">{amendment.year}</p>
                <p>{amendment.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Cases - horizontal strip */}
        <section className="cases-section">
          <div className="cases-header-row">
            <h2>Important Cases</h2>
            <div className="cases-nav-buttons">
              <button
                type="button"
                className="cases-scroll-btn"
                onClick={() => {
                  const container = document.querySelector('.cases-strip');
                  if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                aria-label="Scroll cases left"
              >
                ‹
              </button>
              <button
                type="button"
                className="cases-scroll-btn"
                onClick={() => {
                  const container = document.querySelector('.cases-strip');
                  if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                aria-label="Scroll cases right"
              >
                ›
              </button>
            </div>
          </div>
          <div className="cases-strip" aria-label="Important constitutional cases">
            {importantCases.map((c) => (
              <article key={c.key} className="case-card">
                <div className="case-image-wrapper">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="case-image"
                  />
                </div>
                <div className="case-body">
                  <h3>{c.name}</h3>
                  <p>{c.brief}</p>
                  <button
                    type="button"
                    className="case-read-more"
                    onClick={() => handleNavClick(`Case: ${c.key}`)}
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Did You Know */}
        <section className="facts-widget">
          <h2>Did You Know?</h2>
          <div className="fact-card">
            <p>{quickFacts[currentFact]}</p>
            <button 
              onClick={() => setCurrentFact((prev) => 
                (prev + 1) % quickFacts.length
              )}
            >
              Next Fact
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}