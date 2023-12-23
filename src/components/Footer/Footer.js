import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__info">
        <p className="footer__text">&#64; 2024</p>
        <div className="footer__links">
          <a
            className="footer__text footer__text_type_link"
            href="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__text footer__text_type_link"
            href="https://github.com/"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
