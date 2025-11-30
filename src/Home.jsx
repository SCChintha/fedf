import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/login");
  };

  return (
    <div className="home-landing">
      <button
        className="home-login-button"
        onClick={handleStartLearning}
      >
        Login
      </button>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-badge">An initiative for Constitutional awareness</p>
          <h1 className="hero-title main-hero-title">
            Bharatiya Samvidhan Shiksha Portal
          </h1>
          <h2 className="hero-subtitle-heading">
            Know Your Rights. Perform Your Duties. Understand Your India.
          </h2>
          <p className="hero-subtitle">
            A comprehensive digital gateway to understanding the Indian Constitution,
            simplified for every citizen.
          </p>
          <div className="hero-actions">
            <button className="primary-cta" onClick={handleStartLearning}>
              Start Learning
            </button>
            <button
              className="secondary-cta"
              onClick={handleStartLearning}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </section>

      <main className="home-main">
        {/* Three Pillars Section */}
        <section className="pillars" aria-labelledby="pillars-title">
          <h2 id="pillars-title" className="section-heading">
            The Three Pillars of Samvidhan Shiksha
          </h2>
          <div className="pillars-grid">
            <article className="pillar-card">
              <div className="pillar-icon">🛡</div>
              <h3>Fundamental Rights (Adhikar)</h3>
              <p>
                Understand the power you hold as a citizen. Learn about Right to
                Equality, Freedom, and Constitutional Remedies.
              </p>
            </article>
            <article className="pillar-card">
              <div className="pillar-icon">🇮🇳</div>
              <h3>Fundamental Duties (Kartavya)</h3>
              <p>
                Nation-building starts with you. Explore your responsibilities toward
                the sovereignty and integrity of India.
              </p>
            </article>
            <article className="pillar-card">
              <div className="pillar-icon">⚖</div>
              <h3>Directive Principles (Niti)</h3>
              <p>
                See how the government works for you. Understand the guidelines that
                shape our laws and policies.
              </p>
            </article>
          </div>
        </section>

        {/* Article of the Day */}
        <section className="snippet" aria-labelledby="snippet-title">
          <h2 id="snippet-title" className="section-heading">
            Samvidhan Snippet – Article of the Day
          </h2>
          <div className="snippet-card">
            <h3>Article 21 – Protection of Life and Personal Liberty</h3>
            <p>
              No person shall be deprived of his life or personal liberty except
              according to procedure established by law.
            </p>
            <p className="snippet-note">
              Explained in simple language with real-life examples inside the
              portal.
            </p>
          </div>
        </section>

        {/* Why Use This Portal */}
        <section className="features" aria-labelledby="features-title">
          <h2 id="features-title" className="section-heading">
            Why Use This Portal?
          </h2>
          <div className="features-grid">
            <article className="feature-card">
              <h3>Simplified Language</h3>
              <p>
                No complex legal jargon. We explain the Constitution in simple,
                accessible English so that every learner can follow.
              </p>
            </article>
            <article className="feature-card">
              <h3>Gamified Learning</h3>
              <p>
                Test your knowledge with chapter-wise quizzes, scoreboards, and
                badges to keep you motivated.
              </p>
            </article>
            <article className="feature-card">
              <h3>Visual Storytelling</h3>
              <p>
                Learn through infographics, timelines, and short explainers that
                bring constitutional concepts to life.
              </p>
            </article>
          </div>
        </section>

        {/* Historical Context / Inspiration */}
        <section className="history" aria-labelledby="history-title">
          <h2 id="history-title" className="section-heading">
            Voices Behind the Constitution
          </h2>
          <div className="history-layout">
            <div className="history-quotes">
              <blockquote>
                "Constitution is not a mere lawyer&apos;s document, it is a vehicle
                of Life, and its spirit is always the spirit of Age."
                <span>– Dr. B. R. Ambedkar</span>
              </blockquote>
              <blockquote>
                "India is a land of diversity but also of deep unity." 
                <span>– Sardar Vallabhbhai Patel</span>
              </blockquote>
              <blockquote>
                "We are undertaking a tremendous task. We are laying down a rule of
                law for a vast number of people."
                <span>– Dr. Rajendra Prasad</span>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Explore the Constitution</h4>
            <ul>
              <li>
                • <Link to="/dashboard#preamble">Preamble</Link>
              </li>
              <li>
                • <Link to="/articles#parts-schedules">Parts &amp; Schedules</Link>
              </li>
              <li>
                • <Link to="/articles#amendments">Amendments</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>
                • <Link to="/about">About the Portal</Link>
              </li>
              <li>
                • <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>References</h4>
            <ul>
              <li>
                • <a
                  href="https://legislative.gov.in/en/constitution-of-india"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ministry of Law &amp; Justice
                </a>
              </li>
              <li>
                • <a
                  href="https://egazette.nic.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Official Gazette of India
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-note">
          This is an educational initiative to simplify awareness of the Indian
          Constitution.
        </p>
      </footer>
    </div>
  );
}