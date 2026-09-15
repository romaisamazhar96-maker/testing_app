import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="section-subtitle">
        <span className="line"></span>
        <span className="subtitle-text">Services That i Provide</span>
        <span className="line"></span>
      </div>
      <h2 className="services-main-title">
        My Special Service For Your <br /> Business Development
      </h2>
      <div className="services-list">
        <div className="service-item">
          <div className="service-number">01</div>
          <div className="service-title-box">
            <span className="service-category">Designer</span>
            <h3 className="service-name">Illustration Design</h3>
          </div>
          <p className="service-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
            deserunt mollit
          </p>
          <a href="#details" className="service-arrow-btn">
            ↗
          </a>
        </div>
        <div className="service-item">
          <div className="service-number">02</div>
          <div className="service-title-box">
            <span className="service-category">Branding</span>
            <h3 className="service-name">Business Branding</h3>
          </div>
          <p className="service-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
            deserunt mollit
          </p>
          <a href="#details" className="service-arrow-btn">
            ↗
          </a>
        </div>
        <div className="service-item">
          <div className="service-number">03</div>
          <div className="service-title-box">
            <span className="service-category">UI/UX Design</span>
            <h3 className="service-name">Web UI/UX Design</h3>
          </div>
          <p className="service-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
            deserunt mollit
          </p>
          <a href="#details" className="service-arrow-btn">
            ↗
          </a>
        </div>
        <div className="service-item">
          <div className="service-number">04</div>
          <div className="service-title-box">
            <span className="service-category">Web Design</span>
            <h3 className="service-name">Application Design</h3>
          </div>
          <p className="service-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
            deserunt mollit
          </p>
          <a href="#details" className="service-arrow-btn">
            ↗
          </a>
        </div>
        <div className="service-item">
          <div className="service-number">05</div>
          <div className="service-title-box">
            <span className="service-category">SEO Analytics</span>
            <h3 className="service-name">Digital Marketing</h3>
          </div>
          <p className="service-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
            deserunt mollit
          </p>
          <a href="#details" className="service-arrow-btn">
            ↗
          </a>
        </div>
      </div>
      <div className="process-section">
        <div className="section-subtitle">
          <span className="line"></span>
          <span className="subtitle-text">Working Process</span>
          <span className="line"></span>
        </div>
        <h2 className="services-main-title">
          Your Dream Website In Just Few <br /> Steps
        </h2>
        <div className="process-grid">
          <div className="process-card">
            <h3 className="process-card-title">Concept</h3>
            <p className="process-card-desc">
              Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
              fugit
            </p>
            <ul className="process-list">
              <li>Reviewing any existing branding</li>
              <li>Target audience and competitors research</li>
              <li>Developing a strategy</li>
            </ul>
          </div>
          <div className="process-card">
            <h3 className="process-card-title">Design</h3>
            <p className="process-card-desc">
              Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
              fugit
            </p>
            <ul className="process-list">
              <li>Developing wireframes and mockup</li>
              <li>Choosing typography, color palettes,</li>
              <li>Refining the design</li>
            </ul>
          </div>
          <div className="process-card">
            <h3 className="process-card-title">Webflow</h3>
            <p className="process-card-desc">
              Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
              fugit
            </p>
            <ul className="process-list">
              <li>Testing the website thoroughly launch</li>
              <li>Choosing typography, color palettes,</li>
              <li>Refining the design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;