import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import
import "./Dashboard.css";

// Sample data - Move to separate data file later
const quickFacts = [
  "The Indian Constitution is the longest written Constitution in the world.",
  "It took 2 years, 11 months and 18 days to complete the Constitution.",
  "The original Constitution had 395 Articles and 8 Schedules.",
  "Dr. B.R. Ambedkar is known as the Father of Indian Constitution.",
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

// Add this constant at the top with other constants
const preambleText = `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:

JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity; and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;

IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`;

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentFact, setCurrentFact] = useState(0);
  // In your Dashboard component, add a new state for preamble expansion
  const [isPreambleExpanded, setIsPreambleExpanded] = useState(false);

  // Add click handler for nav tiles
  const handleNavClick = (section) => {
    // Navigation logic will go here
    console.log(`Navigating to ${section}`);
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
          <button 
            className="expand-button"
            onClick={() => setIsPreambleExpanded(!isPreambleExpanded)}
          >
            {isPreambleExpanded ? 'Show Less' : 'Read Full Preamble'}
          </button>
        </section>

        {/* Quick Navigation */}
        <section className="quick-nav">
          <h2>Quick Navigation</h2>
          <div className="nav-tiles">
            {["Parts", "Schedules", "Articles", "Amendments"].map((section) => (
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
              path: "/articles/fundamental-rights"
            },
            {
              title: "Directive Principles",
              description: "Articles 36-51 in Part IV of Constitution",
              path: "/articles/directive-principles"
            },
            {
              title: "Fundamental Duties",
              description: "Article 51A in Part IVA of Constitution",
              path: "/articles/fundamental-duties"
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