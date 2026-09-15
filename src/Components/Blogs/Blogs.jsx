import React from "react";
import "./Blogs.css";
import image1 from "../../assets/photos/blog1.png";
import image2 from "../../assets/photos/blog2.png";
import image3 from "../../assets/photos/blog3.png";

const Blog = () => {
  return (
    <>
    <section className="blog-section" id="blog">
      <div className="blog-left">
        <div className="subtitle-container">
          <span className="subtitle-line"></span>
          <span className="subtitle-text">My Blogs</span>
        </div>
        <h2 className="blog-title">Recent Posts</h2>
        <div className="circle-btn">
          <span></span>
          <p>Click More Work</p>
        </div>
      </div>
      <div className="blog-right">
        <div className="blog-item">
          <div className="blog-info">
            <span className="blog-date">October 19, 2023</span>
            <h3 className="blog-item-title">Brand Design That Helps The Company Grow</h3>
          </div>
          <div className="blog-hover-image">
            <img 
              src={image1} alt="Brand Design" />
          </div>
          <button className="blog-arrow-btn">&#8599;</button>
        </div>
        <div className="blog-item">
          <div className="blog-info">
            <span className="blog-date">October 19, 2023</span>
            <h3 className="blog-item-title">Fresh Design Ideas & Inspiration For 2023</h3>
          </div>
          <div className="blog-hover-image">
            <img 
              src={image2} alt="Fresh Design Ideas" />
          </div>
          <button className="blog-arrow-btn">&#8599;</button>
        </div>
        <div className="blog-item">
          <div className="blog-info">
            <span className="blog-date">October 19, 2023</span>
            <h3 className="blog-item-title">Fresh Design Ideas & Inspiration For 2023</h3>
          </div>
          <div className="blog-hover-image">
            <img 
              src={image3}
              alt="Design Inspiration" 
            />
          </div>
          <button className="blog-arrow-btn">&#8599;</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;