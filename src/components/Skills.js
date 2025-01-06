import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>C/C++</li>
              <li>JavaScript (ES6+)</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>Express.js</li>
              <li>Scikit-learn</li>
              <li>PyTorch</li>
              <li>Streamlit</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>AWS</li>
              <li>Firebase</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
