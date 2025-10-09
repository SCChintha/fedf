import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Articles from "./Articles.jsx";
import Dashboard from "./Dashboard.jsx";
import Resources from "./Resources.jsx";
import Quiz from "./Quiz.jsx";
import Profile from "./Profile.jsx";
import Contact from "./Contact.jsx";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
