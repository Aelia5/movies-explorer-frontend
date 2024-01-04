import "./Portfolio.css";
import "../../blocks/section.css";

function Portfolio() {
  return (
    <section className="section section_type_portfolio portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        className="portfolio__link"
        href="https://github.com/Aelia5/how-to-learn"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-text">Статичный сайт</p>
        <button className="portfolio__link-button">↗</button>
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/Aelia5/russian-travel"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-text">Адаптивный сайт</p>
        <button className="portfolio__link-button">↗</button>
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/Aelia5/react-mesto-api-full-gha"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <button className="portfolio__link-button">↗</button>
      </a>
    </section>
  );
}

export default Portfolio;
