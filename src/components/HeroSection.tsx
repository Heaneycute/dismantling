import React from "react";
import "../styles/HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">ПРОФЕССИОНАЛЬНЫЙ ДЕМОНТАЖ</h1>
        <div className="hero-subtitles">
          <h3 className="hero-left">ЗДАНИЙ И СООРУЖЕНИЙ</h3>
          <h3 className="hero-right">
            В САНКТ-ПЕТЕРБУРГЕ
            <br />И ЛЕНИНГРАДСКОЙ ОБЛАСТИ
          </h3>
        </div>
        <div className="hero-text">
          <p>Ваш надежный партнер</p>
          <p>в сфере демонтажа зданий</p>
          <p>и сооружений любой сложности</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
