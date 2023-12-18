import "./Techs.css";
import "../../blocks/section-title.css";
import "../../blocks/section.css";

function Techs() {
  return (
    <section className="section section_type_techs techs">
      <h2 className="section-title section-title_type_techs">Технологии</h2>
      <p className="techs__title">7 технологий</p>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__table">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
