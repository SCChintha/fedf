import React, { useState } from "react";
import "./Quiz.css";

const QUIZ_TOPICS = [
  "Fundamental Rights",
  "DPSP",
  "Duties",
  "Articles",
  "Amendments",
  "Landmark Cases",
];

// Base question bank per topic – 20 questions each (you can edit/expand later)
const QUESTIONS = {
  "Fundamental Rights": [
    {
      question: "Which Article guarantees the Right to Equality?",
      options: ["Article 12", "Article 14", "Article 19", "Article 21"],
      answerIndex: 1,
    },
    {
      question: "Fundamental Rights are mainly covered under which Part?",
      options: ["Part II", "Part III", "Part IV", "Part IVA"],
      answerIndex: 1,
    },
    {
      question: "Which Article guarantees the Right to Freedom of Speech and Expression?",
      options: ["Article 14", "Article 19(1)(a)", "Article 21", "Article 32"],
      answerIndex: 1,
    },
    {
      question: "Right against Exploitation is primarily covered by which Articles?",
      options: ["23 and 24", "25 and 26", "29 and 30", "31 and 32"],
      answerIndex: 0,
    },
    {
      question: "Protection in respect of conviction for offences is given by:",
      options: ["Article 19", "Article 20", "Article 21", "Article 22"],
      answerIndex: 1,
    },
    {
      question: "Right to Education (6–14 years) is a Fundamental Right under:",
      options: ["Article 21A", "Article 19", "Article 30", "Article 45"],
      answerIndex: 0,
    },
    {
      question: "Which Article provides remedies for enforcement of Fundamental Rights?",
      options: ["Article 32", "Article 226", "Article 136", "Article 13"],
      answerIndex: 0,
    },
    {
      question: "Which Fundamental Right was deleted by the 44th Amendment?",
      options: [
        "Right to Property as a Fundamental Right",
        "Right to Freedom of Religion",
        "Cultural and Educational Rights",
        "Right against Exploitation",
      ],
      answerIndex: 0,
    },
    {
      question: "Which Articles deal with Cultural and Educational Rights?",
      options: ["19 and 20", "21 and 22", "29 and 30", "31 and 32"],
      answerIndex: 2,
    },
    {
      question: "Right to Constitutional Remedies was described by Dr. Ambedkar as:",
      options: [
        "The heart of the Constitution",
        "The soul of the Constitution",
        "Both the heart and soul of the Constitution",
        "The preamble of the Constitution",
      ],
      answerIndex: 2,
    },
    // 10 more placeholders you can customize
    {
      question: "FR Q11 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 0,
    },
    {
      question: "FR Q12 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 1,
    },
    {
      question: "FR Q13 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 2,
    },
    {
      question: "FR Q14 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 3,
    },
    {
      question: "FR Q15 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 0,
    },
    {
      question: "FR Q16 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 1,
    },
    {
      question: "FR Q17 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 2,
    },
    {
      question: "FR Q18 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 3,
    },
    {
      question: "FR Q19 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 0,
    },
    {
      question: "FR Q20 placeholder (edit later)",
      options: ["A", "B", "C", "D"],
      answerIndex: 1,
    },
  ],
  DPSP: [
    {
      question: "Directive Principles of State Policy are contained in which Part?",
      options: ["Part III", "Part IV", "Part V", "Part IVA"],
      answerIndex: 1,
    },
    {
      question: "DPSPs are:",
      options: [
        "Justiciable",
        "Non-justiciable",
        "Fundamental Rights",
        "Emergency provisions",
      ],
      answerIndex: 1,
    },
    // placeholders up to 20
    ...Array.from({ length: 18 }).map((_, i) => ({
      question: `DPSP Q${i + 3} placeholder (edit later)`,
      options: ["A", "B", "C", "D"],
      answerIndex: i % 4,
    })),
  ],
  Duties: [
    {
      question: "Fundamental Duties were added by which Amendment?",
      options: ["42nd", "44th", "52nd", "61st"],
      answerIndex: 0,
    },
    ...Array.from({ length: 19 }).map((_, i) => ({
      question: `Duties Q${i + 2} placeholder (edit later)`,
      options: ["A", "B", "C", "D"],
      answerIndex: i % 4,
    })),
  ],
  Articles: [
    {
      question: "Article 21 is related to:",
      options: [
        "Right to Freedom of Religion",
        "Right to Equality",
        "Protection of Life and Personal Liberty",
        "Right against Exploitation",
      ],
      answerIndex: 2,
    },
    ...Array.from({ length: 19 }).map((_, i) => ({
      question: `Articles Q${i + 2} placeholder (edit later)`,
      options: ["A", "B", "C", "D"],
      answerIndex: i % 4,
    })),
  ],
  Amendments: [
    {
      question: "The 42nd Constitutional Amendment is often called the:",
      options: [
        "Mini Constitution",
        "Basic Structure Case",
        "Emergency Amendment",
        "Green Amendment",
      ],
      answerIndex: 0,
    },
    ...Array.from({ length: 19 }).map((_, i) => ({
      question: `Amendments Q${i + 2} placeholder (edit later)`,
      options: ["A", "B", "C", "D"],
      answerIndex: i % 4,
    })),
  ],
  "Landmark Cases": [
    {
      question: "In which case was the Basic Structure doctrine propounded?",
      options: [
        "Golaknath v. State of Punjab",
        "Kesavananda Bharati v. State of Kerala",
        "Maneka Gandhi v. Union of India",
        "S.R. Bommai v. Union of India",
      ],
      answerIndex: 1,
    },
    ...Array.from({ length: 19 }).map((_, i) => ({
      question: `Cases Q${i + 2} placeholder (edit later)`,
      options: ["A", "B", "C", "D"],
      answerIndex: i % 4,
    })),
  ],
};

export default function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState(QUIZ_TOPICS[0]);
  const [questionCount, setQuestionCount] = useState(5);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const topicQuestions = QUESTIONS[selectedTopic] || [];
  const totalAvailable = topicQuestions.length;
  const maxSelectable = Math.min(20, totalAvailable);
  const activeQuestions = topicQuestions.slice(0, questionCount);

  const handleStart = () => {
    if (!activeQuestions.length) return;
    setStarted(true);
    setFinished(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
  };

  const handleRestart = () => {
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const currentQuestion = activeQuestions[currentIndex];
    if (currentQuestion && selectedOption === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="quiz-page">
      {!started ? (
        <section className="quiz-topic-selector">
          <h2>Quiz Topics</h2>
          <p className="quiz-intro">
            Choose a topic to get started, then tap <strong>Start Quiz</strong>.
          </p>
          <div className="quiz-settings-row">
            <label htmlFor="questionCount" className="quiz-label">
              Number of questions:
            </label>
            <select
              id="questionCount"
              className="quiz-count-select"
              value={questionCount}
              onChange={(e) =>
                setQuestionCount(
                  Math.min(
                    maxSelectable,
                    Math.max(1, Number(e.target.value) || 1)
                  )
                )
              }
            >
              {[5, 10, 15, 20].map((n) => (
                <option key={n} value={n} disabled={n > maxSelectable}>
                  {n} {n > maxSelectable ? "(not enough questions)" : ""}
                </option>
              ))}
            </select>
            <span className="quiz-available">Available: {totalAvailable}</span>
          </div>
          <div className="quiz-topics-list">
            {QUIZ_TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                className={`quiz-topic-item ${
                  selectedTopic === topic ? "active" : ""
                }`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="quiz-start-btn"
            onClick={handleStart}
          >
            Start Quiz
          </button>
        </section>
      ) : (
        <section className="quiz-game">
          <h2>{selectedTopic} Quiz</h2>
          {activeQuestions.length === 0 ? (
            <>
              <p>No questions added for this topic yet.</p>
              <button
                type="button"
                className="quiz-restart-btn"
                onClick={handleRestart}
              >
                Choose Another Topic
              </button>
            </>
          ) : !finished ? (
            <>
              <div className="quiz-status-row">
                <span>
                  Question {currentIndex + 1} of {activeQuestions.length}
                </span>
                <span>Score: {score}</span>
              </div>
              <div className="quiz-question-card">
                <p className="quiz-question-text">
                  {activeQuestions[currentIndex].question}
                </p>
                <div className="quiz-options">
                  {activeQuestions[currentIndex].options.map((opt, idx) => (
                    <button
                      key={opt}
                      type="button"
                      className={`quiz-option-btn ${
                        selectedOption === idx ? "selected" : ""
                      }`}
                      onClick={() => setSelectedOption(idx)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="quiz-submit-btn"
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                >
                  {currentIndex + 1 === activeQuestions.length
                    ? "Finish Quiz"
                    : "Next"}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="quiz-result">
                You scored {score} out of {activeQuestions.length} in
                {" "}
                <strong>{selectedTopic}</strong>.
              </p>
              <button
                type="button"
                className="quiz-restart-btn"
                onClick={handleRestart}
              >
                Choose Another Topic
              </button>
            </>
          )}
        </section>
      )}
    </div>
  );
}