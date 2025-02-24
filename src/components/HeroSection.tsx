import React from "react";
import "../styles/HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Профессиональный демонтаж</h1>
        <div className="hero-subtitles">
          <h3 className="hero-left">Зданий и сооружений</h3>
          <h3 className="hero-right">
            в Санкт-Петербурге
            <br />
            и Ленинградской области
          </h3>
        </div>
        <div className="hero-text">
          <p>Ваш надёжный партнёр</p>
          <p>в сфере демонтажа зданий</p>
          <p>и сооружений любой сложности</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
