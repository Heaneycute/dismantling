import React from "react";
import "../styles/AdvantagesSection.css";
import lockIcon from "../assets/lock.png";
import moneyIcon from "../assets/money.png";
import tapIcon from "../assets/tap.png";
import timeIcon from "../assets/time.png";

const advantages = [
  { desc: "Современная техника - оперативность и эффективность", icon: tapIcon },
  { desc: "Выгодные цены - оптимизируем ваш бюджет", icon: moneyIcon },
  { desc: "Безопасность прежде всего - работаем по закону", icon: lockIcon },
  { desc: "Сдача в срок - ваше время ценно для нас", icon: timeIcon },
];

const AdvantagesSection: React.FC = () => {
  return (
    <section className="advantages-section">
      <h2>НАШИ ПРЕИМУЩЕСТВА:</h2>
      <div className="advantages-list">
        {advantages.map((adv, index) => (
          <div key={index} className="advantage-block">
            <div className="advantage-icon">
              <img src={adv.icon} alt="icon" />
            </div>
            <p>{adv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
