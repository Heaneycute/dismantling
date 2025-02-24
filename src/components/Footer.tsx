import React, { memo } from "react";
import "../styles/Footer.css";
import TG from "../assets/TG.png";
import WA from "../assets/WA.png";

const Footer: React.FC = memo(() => {
  return (
    <footer
      className="footer"
      aria-label="Контактная информация и социальные сети компании"
    >
      <div className="footer-top">
        <h2>Мы на связи!</h2>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a
            href="https://t.me/Snos_SPB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram компании"
          >
            <div className="social-circle telegram">
              <img src={TG} alt="Иконка Telegram" loading="lazy" />
            </div>
          </a>
          <a
            href="https://wa.me/qr/TUAHMMTAHWAQG1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp компании"
          >
            <div className="social-circle whatsapp">
              <img src={WA} alt="Иконка WhatsApp" loading="lazy" />
            </div>
          </a>
        </div>
        <div className="contact-info">
          <p>+79119271855</p>
          <p>9271855@mail.ru</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
