import React, { useState } from "react";
import "../styles/ServicesSection.css";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const services = [
  {
    id: 1,
    title: ["Полный цикл работ:", "от подготовки до утилизации"],
    description:
      "Предлагаем комплексные услуги демонтажа и сноса, охватывающие все этапы – от подготовки до утилизации отходов. Мы берем на себя всю ответственность за проект, обеспечивая безопасность и соответствие нормам. Экономьте время и ресурсы, работая с одним надежным подрядчиком.",
    image: img1,
  },
  {
    id: 2,
    title: [
      "Разработка и согласование",
      "всей необходимой",
      "документации (ППР, ПОД)",
    ],
    description:
      "Разрабатываем и согласовываем всю необходимую документацию для демонтажа (ППР, ПОД). Обеспечиваем соответствие документации требованиям законодательства и надзорных органов. Избегайте задержек и штрафов благодаря профессиональной подготовке документов.",
    image: img2,
  },
  {
    id: 3,
    title: [
      "Заключение договоров",
      "на вывоз мусора I-V",
      "класса опасности на полигоны",
    ],
    description:
      "Организуем вывоз и утилизацию строительного мусора I-V класса опасности на лицензированные полигоны. Предоставляем все необходимые справки об утилизации для подтверждения законности. Гарантируем соблюдение экологических норм и отсутствие претензий.",
    image: img3,
  },
  {
    id: 4,
    title: ["Ведение услуг", "по экологическому", "сопровождению"],
    description:
      "Обеспечиваем экологическое сопровождение проектов демонтажа и сноса. Разрабатываем экологическую документацию и контролируем соблюдение норм. Минимизируем воздействие на окружающую среду и обеспечиваем соответствие законодательству.",
    image: img4,
  },
];

const ServicesSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState([0, 1]);

  const nextImages = () => {
    setVisibleImages((prev) => prev.map((i) => (i + 1) % services.length));
  };

  const prevImages = () => {
    setVisibleImages((prev) =>
      prev.map((i) => (i - 1 + services.length) % services.length)
    );
  };

  return (
    <section className="services-section">
      <h2>ЧТО МЫ ПРЕДЛАГАЕМ?</h2>
      <div className="services-slider">
        {visibleImages.map((index) => (
          <div key={index} className="service-item">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${services[index].image})` }}
            >
              <div
                className={`service-title ${
                  services[index].title.length === 2 ? "shift-up" : ""
                }`}
              >
                {services[index].title.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
            <button onClick={() => setActiveModal(index)}>Узнать подробнее</button>

            {activeModal === index && (
              <div className="service-modal">
                <span
                  className="modal-close"
                  onClick={() => setActiveModal(null)}
                >
                  ✖
                </span>
                <p>{services[index].description}</p>
              </div>
            )}
          </div>
        ))}
        {visibleImages[1] < services.length - 1 && (
          <div className="next-arrow" onClick={nextImages}>
            <img src={rightArrow} alt="Next" />
          </div>
        )}
        {visibleImages[0] > 0 && (
          <div className="prev-arrow" onClick={prevImages}>
            <img src={leftArrow} alt="Previous" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
