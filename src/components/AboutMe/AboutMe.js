import "./AboutMe.css";
import "../../blocks/section-title.css";
import "../../blocks/section.css";
import myPhoto from "../../images/ol1.jpg";

function AboutMe() {
  return (
    <section className="section section_type_about-me about-me">
      <h2 className="section-title">Студент</h2>
      <div className="about-me__container">
        <div>
          <p className="about-me__name">Ольга</p>
          <p className="about-me__brief">Веб-разработчик, 44 года</p>
          <p className="about-me__text">
            Я&nbsp;родилась в&nbsp;городе Черноголовка Московской области, живу
            в&nbsp;Москве. В&nbsp;2001&nbsp;г. закончила социологический
            факультет МГУ. Увлекаюсь историей Древнего Рима, в&nbsp;2019&nbsp;г.
            защитила кандидатскую диссертацию. Работаю в&nbsp;отделении
            геоинформатики ФГБУ &laquo;ВНИГНИ&raquo;. В&nbsp;2023&nbsp;г. решила
            приобрести новую специальность и&nbsp;закончила курс
            &laquo;Веб-разработчик&raquo; &laquo;Яндекс Практикума&raquo;.
          </p>
        </div>
        <img
          className="about-me__photo"
          src={myPhoto}
          alt="Моя фотография"
        ></img>
        <a
          className="about-me__link"
          href="https://github.com/Aelia5"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
