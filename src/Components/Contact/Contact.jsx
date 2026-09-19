import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page" id="contact">
      <div className="contact-header">
        <h1 className="header-title">Let's Start Something</h1>
        <p className="header-breadcrumbs">
          Home / <span>Let's Start Something</span>
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-form-section">
          <h2>Leave A Reply</h2>
          <p className="form-subtext">
            Your email address will not be published. Required fields are marked *</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea placeholder="Write Comments" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit Comment &rarr;
            </button>
          </form>
        </div>
        <div className="contact-info-section">
          <h2>Feel Free To Contact Me Anytime</h2>
          <div className="info-card">
            <span className="info-label">Email</span>
            <p className="info-value">Davidmatias333@Gmail.Com</p>
          </div>
          <div className="info-card">
            <span className="info-label">Phone</span>
            <p className="info-value">+(2) 871 382 023</p>
          </div>
          <div className="info-card">
            <span className="info-label">Address</span>
            <p className="info-value">Victoria Street London</p>
          </div>
        </div>
      </div>
      <div className="touch-banner">
        <h1 className="touch-title">GET IN TOUCH</h1>
      </div>
      <div className="contact-footer-top">
        <div className="footer-left-info">
          <p className="footer-bio">
            Hello, I'm David Matias, Website User Interface Designer based in London.
          </p>
          <a href="mailto:Davidmatias333@Gmail.Com" className="footer-email">
            Davidmatias333@Gmail.Com
          </a>
        </div>
        <div className="footer-social-grid">
          <a href="#facebook" className="social-box">
            Facebook <span>&rarr;</span>
          </a>
          <a href="#instagram" className="social-box">
            Instagram <span>&rarr;</span>
          </a>
          <a href="#dribble" className="social-box">
            Dribble <span>&rarr;</span>
          </a>
          <a href="#webflow" className="social-box">
            Webflow <span>&rarr;</span>
          </a>
        </div>
      </div>
      <div className="contact-footer-bottom">
        <p className="copyright-text">
          Copyright &copy; 2025 <span className="green-text">Matias</span>. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#terms">Terms & Condition</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          &uarr;
        </button>
      </div>
    </div>
  );
};

export default Contact;