import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";
import FranchisePage from "./pages/FranchisePage";
import CareersPage from "./pages/CareersPage";
import Insight from "./pages/InsightPage";
import AbacusPage from "./pages/AbacusPage";
import VedicPage from "./pages/VedicPage";
import RubicPage from "./pages/RubicPage";
import HandwritingPage from "./pages/HandwritingPage";
import ReadingPage from "./pages/ReadingPage";

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/abacus" element={<AbacusPage />} />
        <Route path="/vedic" element={<VedicPage />} />
        <Route path="/rubic" element={<RubicPage />} />
        <Route path="/handwriting" element={<HandwritingPage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/insight" element={<Insight />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
