import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <model-viewer
          src="https://models.readyplayer.me/67791e55600f88fe9c50dcbf.glb"
          alt="3D Avatar of Tanzeel Rahman"
          auto-rotate
          camera-controls
          style={{ width: '250px', height: '250px' }}
        ></model-viewer>

        <div className="home-intro">
          <h2>Hi, I'm Tanzeel Rahman</h2>
          <p>Software engineer</p>

          {/* Button Group */}
          <div className="button-group">
            {/* Resume Button */}
            <a
              href="/Resume(TanZeel).pdf"
              download
              className="btn resume-btn"
            >
              Resume
            </a>

            {/* Let's Connect Button */}
            <a href="#contact" className="btn connect-btn">
              Let's Connect !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
