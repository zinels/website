import React from 'react';
import './About.css';
import profilePic from '../assets/tanzeel2.jpg'; // Add your picture to the assets folder

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <img src={profilePic} alt="Tanzeel Rahman" className="profile-pic" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hey there! I’m Tanzeel Rahman, a Computer Science student at USF who loves coding, soccer, and solving real-world problems. Whether it’s building web apps or exploring AI, I’m always excited to learn something new. When I’m not busy coding, you might find me on the soccer field or experimenting with new tech!
            </p>
            <p>
              My goal is to become a software engineer who not only writes great code but also contributes to meaningful projects that make an impact.
            </p>
          </div>
        </div>

        <div className="education-cards">
          <h3>Education</h3>
          <div className="card">
            <h4>University of South Florida</h4>
            <p>Bachelor of Science in Computer Science, Honors College</p>
            <p>Graduation Date: May 2027</p>
            <p>GPA: 3.94/4.00</p>
            <p>Relevant Courses:</p>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Logic Design</li>
              <li>Computer Architecture</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
