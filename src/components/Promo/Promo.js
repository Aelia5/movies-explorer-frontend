import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__titles">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб‑разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <NavTab />
      </div>
      <div className="promo__logo" />
    </section>
  );
}

export default Promo;
