import React, { memo } from "react";
import TG from "../assets/TG.jpg";
import WA from "../assets/WA.jpg";
import "../styles/HeroSection.css";

const HeroSection: React.FC = memo(() => {
  return (
    <section
      className="hero-section"
      aria-label="Профессиональный демонтаж зданий и сооружений в Санкт-Петербурге и Ленинградской области"
    >
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Профессиональный демонтаж</h1>
        <div className="hero-subtitles">
          <h3 className="hero-left">Зданий и сооружений</h3>
          <h3 className="hero-right">
            в Санкт-Петербурге
            <br />и Ленинградской области
          </h3>
        </div>
        <div className="hero-text">
          <p>
            Ваш надёжный партнёр
            <br />
            в сфере демонтажа зданий
            <br />и сооружений любой сложности
          </p>
          <div className="hero-contact-block">
            <div className="hero-social-icons">
              <a
                href="https://t.me/Snos_SPB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram компании"
              >
                <div className="hero-social-circle telegram">
                  <img src={TG} alt="Иконка Telegram" loading="lazy" />
                </div>
              </a>
              <a
                href="https://wa.me/qr/TUAHMMTAHWAQG1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp компании"
              >
                <div className="hero-social-circle whatsapp">
                  <img src={WA} alt="Иконка WhatsApp" loading="lazy" />
                </div>
              </a>
            </div>
            <div className="hero-contact-info">
              <a href="tel:+79119271855" aria-label="Позвонить +79119271855">
                <p>+79119271855</p>
              </a>
              <a
                href="mailto:9271855@mail.ru"
                aria-label="Написать на 9271855@mail.ru"
              >
                <p>9271855@mail.ru</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
