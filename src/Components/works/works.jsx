import React from "react";
import "./works.css";
import Work1 from "../../assets/photos/pro1.png";
import Work2 from "../../assets/photos/pro2.png";
import Work3 from "../../assets/photos/pro3.png";
import Work4 from "../../assets/photos/pro4.png";
import Work5 from "../../assets/photos/pro5.png";
import ContactCharacter from "../../assets/photos/contact-man.png";

const Works = () => {
  return (
    <>
    <div className="work-section" id="work">
      <div className="section-subtitle">
        <span className="line"></span>
        <span className="subtitle-text">Complete Project</span>
        <span className="line"></span>
      </div>
      <h2 className="work-main-title">
        Look At My Portfolio And Give Me <br /> Your Feedback
      </h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={Work1} alt="Brand Identity" className="project-img" />
          </div>
          <div className="project-info">
            <div>
              <span className="project-category">PRODUCT DESIGN</span>
              <h3 className="project-title">Brand Identity & Motion Design</h3>
            </div>
            <a href="#details" className="arrow-btn">↗</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={Work2} alt="Mobile App" className="project-img" />
          </div>
          <div className="project-info">
            <div>
              <span className="project-category">UI/UX DESIGN</span>
              <h3 className="project-title">Mobile Application Development</h3>
            </div>
            <a href="#details" className="arrow-btn">↗</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={Work3} alt="Branding Mockup" className="project-img" />
          </div>
          <div className="project-info">
            <div>
              <span className="project-category">PRODUCT DESIGN</span>
              <h3 className="project-title">Design & Branding Mokup</h3>
            </div>
            <a href="#details" className="arrow-btn">↗</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={Work4} alt="UI Design" className="project-img" />
          </div>
          <div className="project-info">
            <div>
              <span className="project-category">UI/UX DESIGN</span>
              <h3 className="project-title">Mobile Application Development</h3>
            </div>
            <a href="#details" className="arrow-btn">↗</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={Work5} alt="Product Mockup" className="project-img" />
          </div>
          <div className="project-info">
            <div>
              <span className="project-category">UI/UX DESIGN</span>
              <h3 className="project-title">Mobile Application Development</h3>
            </div>
            <a href="#details" className="arrow-btn">↗</a>
          </div>
        </div>
      </div>
      <div className="circle-btn-container">
        <a href="#work" className="circle-btn">
          <span className="arrow">→</span>
          <span>Click More Work</span>
        </a>
      </div>
      <div className="contact-banner">
        <div className="banner-left">
          <div className="banner-subtitle">
            <span className="short-line"></span>
            <span>Need a Project?</span>
          </div>
          <h2 className="banner-title">
            Let's Work Together. <br /> Fixed A Meeting
          </h2>

          <div className="contact-info-list">
            <div className="contact-item">
              <div className="icon-circle">✉</div>
              <div>
                <span className="contact-label">Email</span>
                <p className="contact-value">Davidmatias333@Gmail.Com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-circle">📍</div>
              <div>
                <span className="contact-label">Location</span>
                <p className="contact-value">Victoria Street London, England</p>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <img
            src={ContactCharacter}
            alt="3D Character Desk"
            className="contact-character-img"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Works;