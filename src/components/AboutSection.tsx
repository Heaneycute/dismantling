import React from "react";
import "../styles/AboutSection.css";
import aboutImage from "../assets/AboutSection.jpg";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <p className="strong-text">
            <strong>12+</strong> лет успешной работы в сфере демонтажа и сноса
          </p>
          <p className="strong-text">
            <strong>107+</strong> проектов различной сложности реализовано
          </p>
          <p className="strong-text">
            <strong>20%</strong>экономии
            <br />
            для клиента
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Section" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
