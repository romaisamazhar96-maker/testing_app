import React from "react";
import CharacterImg from "../../assets/photos/about.png";
import "./About.css";

const About = () => {
  return (
    <>
    <div className="about-section" id="about">
      <div className="about-header">
        <div className="star-icon">✳</div>
        <h2 className="about-intro-text">
          I'm David Matias, I'm a Brand & Webflow Designer, Currently residing
          in the lush Victoria Street London, Matias operates globally and is
          ready to take on any design challenge.
        </h2>
      </div>
      <div className="about-tabs">
        <button className="tab-btn active">ABOUT</button>
        <button className="tab-btn">EXPERIENCE</button>
        <button className="tab-btn">EDUCATION</button>
        <button className="tab-btn">SKILLS</button>
      </div>
      <div className="personal-info-container">
        <div className="character-wrapper">
          <img
            src={CharacterImg}
            alt="3D Character sitting on sofa"
            className="character-img"/>
        </div>
        <div className="personal-details">
          <h3 className="info-title">Personal Info</h3>
          <p className="info-description">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam,
            exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse
            quam nihil.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <span className="info-label">Email</span>
              <span className="info-value">Matias999@Gmail.Com</span>
            </div>
            <div className="info-card">
              <span className="info-label">Phone</span>
              <span className="info-value">+(2) 871 382 023</span>
            </div>
            <div className="info-card">
              <span className="info-label">Address</span>
              <span className="info-value">Victoria Street London,</span>
            </div>
            <div className="info-card">
              <span className="info-label">Follow</span>
              <div className="social-links">
                <a href="#facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#dribbble">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
                <a href="#instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="awards-section">
        <div className="awards-header">
          <h2 className="awards-title">Our Awards</h2>
          <a href="#work" className="view-work-link">
            View My Work
          </a>
        </div>
        <div className="awards-list">
          <div className="award-item">
            <span className="award-name">Site Of The Day</span>
            <span className="award-category">Css & Animation</span>
            <span className="award-year">2018</span>
          </div>
          <div className="award-item">
            <span className="award-name">Best Business Model</span>
            <span className="award-category">New Strategy</span>
            <span className="award-year">2019</span>
          </div>
          <div className="award-item">
            <span className="award-name">Motion Graphic</span>
            <span className="award-category">3D & Visual Effect</span>
            <span className="award-year">2020</span>
          </div>
          <div className="award-item">
            <span className="award-name">Video Design</span>
            <span className="award-category">Css & Animation</span>
            <span className="award-year">2022</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;