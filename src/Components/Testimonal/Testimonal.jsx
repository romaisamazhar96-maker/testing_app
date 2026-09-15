import React from "react";
import "./Testimonal.css";
import Client1 from "../../assets/photos/man1.png";
import Client2 from "../../assets/photos/man3.png";
import MainClient from "../../assets/photos/man2.png";

const Testimonial = () => {
  return (
    <div className="testimonial-section" id="testimonial">
      <div className="section-subtitle">
        <span className="line"></span>
        <span className="subtitle-text">Testimonial</span>
        <span className="line"></span>
      </div>
      <h2 className="testimonial-main-title">
        Happy Words From Happy <br /> Customer
      </h2>
      <div className="testimonial-card">
        <div className="quote-mark">“</div>
        <div className="avatar-left-top">
          <img src={Client1} alt="Customer Avatar" />
        </div>
        <div className="avatar-left-bottom">
          <img src={Client2} alt="Customer Avatar" />
        </div>
        <div className="testimonial-content">
          <div className="star-rating">
            ★★★★<span>★</span>
          </div>
          <p className="testimonial-text">
            There are many variations of passages of Lorem Ipsum available, by
            injected humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be hidden in middle of text. All the Lorem Ipsum generators
          </p>
          <h3 className="client-name">Nethon Jr</h3>
          <p className="client-role">Business Owner</p>
          <div className="dots-container">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
          </div>
        </div>
        <div className="testimonial-right-img">
          <img src={MainClient} alt="Main Client" />
        </div>
      </div>
      <div className="trusted-section">
        <h3 className="trusted-title">
          More Than 100+ Companies Trusted Us Worldwide
        </h3>
        <div className="company-logos">
          <span>Walmart ✳</span>
          <span>LinkedIn</span>
          <span>Google</span>
          <span>#slack</span>
          <span>Walmart ✳</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;