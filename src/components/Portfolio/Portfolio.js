import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="section section_type_portfolio portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        className="portfolio__link"
        href="https://aelia5.github.io/how-to-learn/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-text">Статичный сайт</p>
        <div className="portfolio__link-button">↗</div>
      </a>
      <a
        className="portfolio__link"
        href="https://aelia5.github.io/russian-travel/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-text">Адаптивный сайт</p>
        <div className="portfolio__link-button">↗</div>
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/Aelia5/react-mesto-api-full-gha"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <div className="portfolio__link-button">↗</div>
      </a>
    </section>
  );
}

export default Portfolio;
