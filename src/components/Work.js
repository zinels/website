import React from 'react';
import './Work.css';
import btclLogo from '../assets/btcl logo.jpg';
import thKoelnLogo from '../assets/th-koln.jpg';
import undpLogo from '../assets/undp.jpg';
import bsaLogo from '../assets/bsa logo.jpg';
import encodeLogo from '../assets/encode.jpg'; // Add the EnCoDe Lab logo

const Work = () => {
  const workExperiences = [
    {
      company: 'EnCoDe Lab, University of South Florida',
      logo: encodeLogo,
      position: 'Undergraduate Research Assistant',
      duration: 'January 2025 - Present',
      responsibilities: [
        'Building an application in Unity for research on driver behavior and music volume.',
        'Collaborating with professors in the psychology department.',
        'Contributing to interdisciplinary research focused on human-computer interaction.',
        'Developing real-time solutions and documenting findings.'
      ]
    },
    {
      company: 'Bangladesh Telecommunications Company Limited (BTCL)',
      logo: btclLogo,
      position: 'Software Engineer Intern',
      duration: 'May 2024 - August 2024',
      responsibilities: [
        'Developed AI-driven models and optimized data workflows.',
        'Integrated machine learning algorithms to improve decision-making.',
        'Built AI-enhanced security protocols for sensitive data protection.',
        'Documented deployment strategies for AI models.'
      ]
    },
    {
      company: 'TH Köln (University of Applied Sciences), Germany',
      logo: thKoelnLogo,
      position: 'Student Assistant',
      duration: 'June 2021 - October 2021',
      responsibilities: [
        'Acquired geospatial data from over 5 organizations.',
        'Performed data rectification and standardization for 10+ datasets.',
        'Orchestrated 3 successful events with 100+ participants.',
        'Authored a Software Requirements Specification (SRS) document.'
      ]
    },
    {
      company: 'UNDP & Khulna University, Bangladesh',
      logo: undpLogo,
      position: 'Research Assistant',
      duration: 'January 2022 - May 2022',
      responsibilities: [
        'Aggregated data for transport sector emissions analysis.',
        'Generated statistical outputs to support policy-making.',
        'Conducted learning sessions on NDC and climate initiatives.'
      ]
    }
  ];

  const leadershipExperiences = [
    {
      role: 'Student Coordinator',
      logo: bsaLogo,
      organization: 'Bangladesh Student Association (BSA), USF',
      duration: 'June 2024 - Present',
      location: 'Tampa, FL',
      responsibilities: [
        'Acted as the primary point of contact for inquiries, providing guidance and a welcoming environment for both students and their families to ensure a smooth transition.',
        'Led 15 volunteers in organizing "Shondhar Adda," the inaugural fall event, enhancing student engagement and community support.',
        'Oversaw 21 dance performances and collaborated with e-board partners to make "Mock Gaye Holud," a cultural event, a successful and memorable experience for over 350 audience members.',
        'Facilitated teamwork and collaboration to ensure the success of cultural and academic events.'
      ]
    },
    {
      role: 'Sports Coordinator',
      logo: bsaLogo,
      organization: 'Bangladesh Student Association (BSA), USF',
      duration: 'June 2024 - Present',
      location: 'Tampa, FL',
      responsibilities: [
        'Coordinated the association’s first sports tournament, engaging over 50 participants.',
        'Collaborated with team members to ensure efficient operations and participant satisfaction.'
      ]
    },
    {
      role: 'Co-founder (Non-Profit Organization)',
      organization: 'Support in Crisis',
      duration: 'April 2020 - Present',
      location: 'Tampa, FL',
      responsibilities: [
        'Initiated and co-founded an impactful community service platform in response to the COVID-19 pandemic.',
        'Managed a total of 50 volunteers, overseeing their activities across smaller, specialized teams within Support in Crisis.',
        'Orchestrated the distribution of food packages, providing essential support to over 10,000 underprivileged individuals during lockdown.',
        'Raised $3000 in funds through an active Facebook page: Support in Crisis, engaging a community of supporters and donors.'
      ]
    }
  ];

  return (
    <section id="work">
      <div className="work-container">
        <h2>Work Experience</h2>
        <div className="work-cards">
          {workExperiences.map((work, index) => (
            <div className="work-card" key={index}>
              <div className="work-title">
                <img src={work.logo} alt={`${work.company} Logo`} className="work-logo" />
                <h3>{work.company}</h3>
              </div>
              <p><strong>Position:</strong> {work.position}</p>
              <p><strong>Duration:</strong> {work.duration}</p>
              <ul>
                {work.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2>Leadership Experience</h2>
        <div className="work-cards">
          {leadershipExperiences.map((leadership, index) => (
            <div className="work-card" key={index}>
              <div className="work-title">
                {leadership.logo && (
                  <img src={leadership.logo} alt={`${leadership.organization} Logo`} className="work-logo" />
                )}
                <h3>{leadership.role}</h3>
              </div>
              <p><strong>Organization:</strong> {leadership.organization}</p>
              <p><strong>Duration:</strong> {leadership.duration}</p>
              <p><strong>Location:</strong> {leadership.location}</p>
              <ul>
                {leadership.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
