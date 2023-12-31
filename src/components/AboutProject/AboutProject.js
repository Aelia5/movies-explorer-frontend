import "./AboutProject.css";

function AboutProject() {
  return (
    <section
      className="section section_type_about-project about-project"
      id="about-project"
    >
      <h2 className="section-title">О проекте</h2>
      <div className="about-project__table">
        <div>
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timetable">
        <span className="about-project__cell about-project__cell_type_backend">
          1 неделя
        </span>
        <span className="about-project__cell">4 недели</span>
        <span className="about-project__cell about-project__cell_type_caption">
          Back-end
        </span>
        <span className="about-project__cell about-project__cell_type_caption">
          Front-end
        </span>
      </div>
    </section>
  );
}

export default AboutProject;
