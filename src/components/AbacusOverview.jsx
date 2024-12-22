import React, { useState } from "react";
import point from "../Assets/courses-img/checkpoint.png";
import "../styles/AbacusOverview.css";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null); // For dropdown in Levels tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="page-container">
      {/* Tab Navigation (outside the box) */}
      <div className="tab-header">
        {["Overview", "Levels", "Details", "Opportunities"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${
              activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Box with Shadow for Content */}
      <div className="content-card">
        {activeTab === "overview" && (
          <div className="overview-content">
            <h2 className="main-title">What is Abacus ?</h2>
            <p className="description">
              Abacus is a Latin word that has its origins in the Greek words
              <i> abax</i> or <i>abakion</i> (meaning "table" or "tablet"),
              which in turn, possibly originated from the Semitic word{" "}
              <i>abaq</i>, meaning "sand". The abacus is one of many types of
              counting devices that are used to count large numbers.
            </p>
            <h3 className="sub-title">
              Unlock Your Child's Brain Potential with Abacus Learning!
            </h3>
            <p className="description">
              Unleash the limitless potential of your child’s mind with our
              Abacus program! Specially designed for children aged 4 to 15.
            </p>
            <p className="description">
              This course isn’t just about calculations; it’s a journey of
              holistic brain development. The Abacus program stimulates both
              sides of the brain, helping children improve cognitive abilities
              through visualization, memory, and concentration. Each level
              progressively builds upon skills, from simple calculations to
              advanced memory techniques.
            </p>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Designed to enhance focus
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Faster problem-solving
                skills and mental agility
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Visualization &
                Concentration
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Memory Retention & Recall
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Photographic Memory
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Speed & Accuracy
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Listening Skills
              </li>
            </ul>
          </div>
        )}
        {activeTab === "levels" && (
  <div className="levels-content">
    {/* Little Star Abacus */}
    <div className="dropdown-item">
      <div
        className="dropdown-header"
        onClick={() => toggleSection("littleStar")}
        style={{
          color: expandedSection === "littleStar" ? "#455a64" : "#f58634",
          fontWeight: "bold",
        }}
      >
        <h3>1. Little Star Abacus</h3>
        <span>{expandedSection === "littleStar" ? "-" : "+"}</span>
      </div>
      {expandedSection === "littleStar" && (
        <div className="dropdown-content">
          <p className="dropdown-course-info">
            <span>Eligibility:</span> LKG to 2nd Grade
          </p>
          <p className="dropdown-course-info">
            <span>Duration:</span> 3 Months
          </p>
          <p className="dropdown-course-info">
            <span>Focus:</span> Foundation Learning
          </p>
          <p className="dropdown-description">
            The Little Star program is designed to introduce young learners
            (ages 4\u20137) to the basics of using the Abacus. It focuses on
            building number sense and hand-eye coordination, laying a strong
            foundation for mental arithmetic.
          </p>
          <h4 className="dropdown-subtitle">Key Skills Developed</h4>
          <ul className="benefits-list">
            <li>
              <img src={point} alt="Checkpoint" /> Recognizing and representing
              numbers from 1 to 100.
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Performing basic addition
              and subtraction using the Abacus.
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Enhancing concentration and
              fine motor skills through bead manipulation.
            </li>
          </ul>
          <h4 className="dropdown-subtitle">Learning Methodology</h4>
          <p className="dropdown-course-info">
              <span>Hands-On Practice :</span> Frequent
              use of physical abacus tools.
            </p>
            <p className="dropdown-course-info">
            <span>Interactive Techniques : </span>
              Stories, games, and visuals to make learning fun.
            </p>
            <p className="dropdown-course-info">
            <span>Parent Engagement :</span> Regular
              updates to parents on progress and tips for practicing at home.
            </p>
          
        </div>
      )}
    </div>

    {/* The Brain Charger */}

<div className="dropdown-item">
  <div
    className="dropdown-header"
    onClick={() => toggleSection("brainCharger")}
    style={{
      color: expandedSection === "brainCharger" ? "#455a64" : "#f58634",
      fontWeight: "bold",
    }}
  >
    <h3>2. The Brain Charger</h3>
    <span>{expandedSection === "brainCharger" ? "-" : "+"}</span>
  </div>
  {expandedSection === "brainCharger" && (
    <div className="dropdown-content">
      <p className="dropdown-course-info">
        <span>Eligibility:</span> 3rd to 10th Grade | Completion of the Little Star Program
      </p>
      <p className="dropdown-course-info">
        <span>Duration:</span> 12.5 Months (5 Levels of 2.5 Months Each)
      </p>
      <p className="dropdown-course-info">
        <span>Focus:</span> Intermediate Learning
      </p>
      <p className="dropdown-description">
        This program transitions students from foundational skills to advanced arithmetic calculations using the Abacus. With five progressive levels, the Brain Charger program is designed to refine cognitive abilities and enhance mental arithmetic.
      </p>
      <div className="levels-details">
      <h4 className="level-detail"><span>Level 1:</span> Beginner</h4>
      <ul>
        <li>Learning double-digit addition and subtraction.</li>
        <li>Introduction to basic multiplication techniques.</li>
      </ul>

      <h4 className="level-detail"><span>Level 2:</span> Intermediate</h4>
      <ul>
        <li>Transition from physical abacus to mental visualization of beads.</li>
        <li>Multiplication up to two-digit numbers.</li>
      </ul>

      <h4 className="level-detail"><span>Level 3:</span> Advanced Beginner</h4>
      <ul>
        <li>Addition and subtraction with three-digit numbers.</li>
        <li>Faster mental calculations with guided visualization.</li>
      </ul>

      <h4 className="level-detail"><span>Level 4:</span> Advanced Intermediate</h4>
      <ul>
        <li>Division concepts introduced.</li>
        <li>Speed tests to enhance calculation accuracy.</li>
      </ul>

      <h4 className="level-detail"><span>Level 5:</span> Expert</h4>
      <ul>
        <li>Mastery of multi-step problem-solving.</li>
        <li>Complex calculations involving decimals and fractions.</li>
      </ul>
    </div>

      <h4 className="dropdown-subtitle">Key Skills Developed</h4>
      <ul className="benefits-list">
        <li>
          <img src={point} alt="Checkpoint" /> Enhanced mental visualization of numbers.
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Faster calculations (up to 50% improvement in speed).
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Stronger analytical and logical reasoning.
        </li>
      </ul>
              <h4 className="dropdown-subtitle">Learning Methodology</h4>
        <p className="dropdown-course-info">
          <span>Practice Sheets:</span> Weekly exercises for consistent learning.
        </p>
        <p className="dropdown-course-info">
          <span>Skill Competitions:</span> Periodic challenges to build confidence and speed.
        </p>
        <p className="dropdown-course-info">
          <span>Interactive Techniques:</span> Stories, games, and visuals to make learning fun.
        </p>
        <p className="dropdown-course-info">
          <span>Parent Engagement:</span> Regular updates to parents on progress and tips for practicing at home.
        </p>

    </div>
  )}
</div>


    {/* Advanced Level */}
    <div className="dropdown-item">
      <div
        className="dropdown-header"
        onClick={() => toggleSection("advancedLevel")}
        style={{
          color: expandedSection === "advancedLevel" ? "#455a64" : "#f58634",
          fontWeight: "bold",
        }}
      >
        <h3>3. Advanced Level</h3>
        <span>{expandedSection === "advancedLevel" ? "-" : "+"}</span>
      </div>
      {expandedSection === "advancedLevel" && (
        <div className="dropdown-content">
          <p>Content for Advanced Level.</p>
        </div>
      )}
    </div>

    {/* Grand Level */}
    <div className="dropdown-item">
      <div
        className="dropdown-header"
        onClick={() => toggleSection("grandLevel")}
        style={{
          color: expandedSection === "grandLevel" ? "#455a64" : "#f58634",
          fontWeight: "bold",
        }}
      >
        <h3>4. Grand Level</h3>
        <span>{expandedSection === "grandLevel" ? "-" : "+"}</span>
      </div>
      {expandedSection === "grandLevel" && (
        <div className="dropdown-content">
          <p>Content for Grand Level.</p>
        </div>
      )}
    </div>
  </div>
)}

        {activeTab === "details" && (
  <div className="details-content">
    <h2 className="main-title">The Science Behind Abacus Training</h2>
    <p>
      The Abacus program is not just about numbers—it's a scientifically backed
      method designed to enhance cognitive abilities and brain functions. The act
      of bead manipulation stimulates both the left and right hemispheres of the
      brain, fostering neuroplasticity and creating strong neural connections.
      Here's how it works:
    </p>

    <h3 className="sub-title">Brain Activation</h3>
    <ul className="brain-activation-list">
      <li>
        <strong>Left Hemisphere:</strong> Handles logical thinking, analytical
        reasoning, and sequential problem-solving, which are essential in
        arithmetic.
      </li>
      <li>
        <strong>Right Hemisphere:</strong> Focuses on creativity, visualization,
        and holistic thinking, activated by imagining bead movements mentally.
      </li>
    </ul>
    <p>
      The combination of these two functions during Abacus training leads to
      balanced and heightened cognitive abilities.
    </p>

    <h3 className="sub-title">
      Key Skills Enhanced Through Abacus Training
    </h3>
    <ul className="key-skills-list">
      <li>
        <strong>Visualization:</strong> Students learn to visualize the abacus
        beads in their mind, strengthening mental imagery and creative thinking.
        <br />
        <strong>Result:</strong> They can solve complex calculations without
        physically using the abacus.
      </li>
      <li>
        <strong>Memory & Recall:</strong> Repeated practice sharpens short-term
        and long-term memory, often leading to photographic memory.
        <br />
        <strong>Result:</strong> Students excel in academic subjects and recall
        information with ease.
      </li>
      <li>
        <strong>Listening Skills:</strong> Group exercises and oral tests
        improve auditory processing, helping students respond quickly and
        accurately.
        <br />
        <strong>Result:</strong> Improved communication and better academic
        performance in oral-based assessments.
      </li>
      <li>
        <strong>Speed & Accuracy:</strong> The progressive levels focus on
        improving calculation speed while maintaining precision.
        <br />
        <strong>Result:</strong> Students develop confidence and a competitive
        edge in academics and beyond.
      </li>
    </ul>
  </div>
)}

        {activeTab === "opportunities" && <div>Opportunities Content</div>}
      </div>
    </div>
  );
};

export default Overview;
