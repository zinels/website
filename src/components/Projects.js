import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Reddit Scraper',
    description: 'A Python-based web scraper that extracts data from Reddit posts for analysis.',
    techStack: ['Python', 'BeautifulSoup', 'Pandas'],
    githubLink: 'https://github.com/zinels/reddit-scraper',
  },
  {
    title: 'Iris Flower Classification',
    description: 'Built a machine learning model to classify Iris flower species with 94% accuracy.',
    techStack: ['Python', 'PyTorch', 'Scikit-Learn', 'Streamlit'],
    githubLink: 'https://github.com/zinels/iris-classification',
  },
  {
    title: 'FacultyFinder',
    description: 'A full-stack web platform for reviewing and rating professors in private universities.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    githubLink: 'https://github.com/zinels/facultyfinder',
  },
  {
    title: 'Zinels Chatbot',
    description: 'A chatbot built using OpenAI’s GPT-3.5 Turbo to provide insights on soccer and cricket.',
    techStack: ['Python', 'OpenAI', 'Gradio'],
    githubLink: 'https://github.com/zinels/zinels-chatbot',
  },
  {
    title: 'Arduino Robot',
    description: 'An Arduino-based robot designed for obstacle detection and avoidance.',
    techStack: ['Arduino', 'C++', 'Ultrasonic Sensor'],
    githubLink: 'https://github.com/zinels/arduino-robot',
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-card-back">
                <h4>Tech Stack</h4>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1e1e1e" /* Slightly lighter than background */
            d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,266.7C672,277,768,267,864,256C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
