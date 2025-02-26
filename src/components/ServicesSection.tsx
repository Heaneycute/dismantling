import React, { useState, memo, useCallback } from "react";
import "../styles/ServicesSection.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

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

const ServicesSection: React.FC = memo(() => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const toggleModal = useCallback((index: number) => {
    setActiveModal((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      className="services-section"
      aria-label="Услуги компании: полный цикл работ, документация, вывоз мусора, экологическое сопровождение"
    >
      <h2>ЧТО МЫ ПРЕДЛАГАЕМ?</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={service.id} className="service-item">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div
                className={`service-title ${
                  service.title.length === 2 ? "shift-up" : ""
                } ${activeModal === index ? "hidden" : ""}`}
              >
                {service.title.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
            <div className="button-container">
              <button
                onClick={() => toggleModal(index)}
                aria-label={`Узнать подробнее о ${service.title[0]}`}
              >
                Узнать подробнее
              </button>
            </div>
            {activeModal === index && (
              <div className="modal-container">
                <div className="service-modal">
                  <p>{services[index].description}</p>
                  <span
                    className="modal-close"
                    onClick={() => setActiveModal(null)}
                    aria-label="Закрыть модальное окно"
                  >
                    ✖
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
});

export default ServicesSection;
