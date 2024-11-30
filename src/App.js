import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";
import FranchisePage from "./pages/FranchisePage";
import CareersPage from "./pages/CareersPage";
import Insight from "./pages/InsightPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/insight" element={<Insight />} />
      </Routes>
    </Router>
  );
}

export default App;
