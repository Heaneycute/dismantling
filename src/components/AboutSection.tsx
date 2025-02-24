import React, { memo } from "react";
import "../styles/AboutSection.css";
import aboutImage from "../assets/AboutSection.jpg";

const AboutSection: React.FC = memo(() => {
  return (
    <section
      className="about-section"
      aria-label="Статистика и информация о 12+ годах успешной работы, 107+ реализованных проектах и 20% экономии для клиента"
    >
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
          <img
            src={aboutImage}
            alt="Изображение, иллюстрирующее деятельность компании"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
