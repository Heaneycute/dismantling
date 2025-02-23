import React from "react";
import "../styles/Footer.css";
import TG from "../assets/TG.png";
import WA from "../assets/WA.png";
import INST from "../assets/INST.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Мы на связи!</h2>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <div className="social-circle telegram">
              <img src={TG} alt="Telegram" />
            </div>
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <div className="social-circle whatsapp">
              <img src={WA} alt="WhatsApp" />
            </div>
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <div className="social-circle instagram">
              <img src={INST} alt="Instagram" />
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
};

export default Footer;
