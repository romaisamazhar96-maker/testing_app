import React from "react";
import HeroImg from "../../assets/photos/banner-man-62844818.png";
import BgImg from "../../assets/photos/background.jpeg";
import "./home.css";
import Services from "../Services/Services";
import Testimonial from "../Testimonal/Testimonal";
import About from "../About/About";

const Home = () => {
    return (
        <>
        <div
            className="hero-section"
            style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="bg-overlay"></div>
            <div className="left-sidebar">
                <div className="phone-wrapper">
                    <span>(+02)-574-328-301</span>
                    <i className="fa-solid fa-grip-vertical grip-icon"></i>
                </div>
                <div className="scroll-wrapper">
                    <span>SCROLL DOWN</span>
                    <i className="fa-solid fa-arrow-right scroll-arrow"></i>
                </div>
            </div>
            <div className="hero-content">
                <div className="available-box">
                    <span>Currently Available For Freelance Worldwide</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <h1 className="main-title">
                    Creative Visual <br />
                    <span className="designer-text">Designer</span>
                </h1>
                <div className="work-process">
                    <button className="play-btn">
                        <i className="fa-solid fa-play"></i>
                    </button>
                    <span className="process-text">Work <br /> Process</span>
                </div>
            </div>
            <div className="hero-image-wrapper">
                <img src={HeroImg} alt="Matias Portfolio" className="hero-img" />
            </div>
            <div className="right-sidebar">
                <div className="follow-box">
                    <span>FOLLOW ME</span>
                    <i className="fa-solid fa-arrow-right follow-arrow"></i>
                </div>
                <div className="social-icons">
                    <a href="#facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#twitter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#dribbble"><i className="fa-brands fa-dribbble"></i></a>
                    <a href="#instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <About/>
        <works/>
        <Services/>
        <Testimonial/>
        <Blogs/>
        <Contact/>
        </>
    );
};
export default Home;