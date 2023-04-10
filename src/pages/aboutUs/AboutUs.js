import React from "react";
import css from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={css.wrapper}>
      <div className={css.divider}></div>
      <div className={css.container}>
        <h2>O nas</h2>
        <h3>Nasza firma</h3>
        <p>
          SPECROLL, założona w 1991 roku, to doświadczona firma specjalizująca
          się w osłonach okiennych i bramach garażowych. Przez ponad 30 lat
          dostarczaliśmy wysokiej jakości produkty i usługi dla klientów
          indywidualnych i firm. Naszą misją jest tworzenie komfortowych,
          bezpiecznych i estetycznych przestrzeni.
        </p>

        <h3>Oferta</h3>
        <p>Nasza oferta:</p>
        <ul>
          <li>Rolety zewnętrzne</li>
          <li>Roletki materiałowe</li>
          <li>Żaluzje</li>
          <li>Plisy</li>
          <li>Bramy garażowe</li>
          <li>Markizy</li>
          <li>Moskitiery</li>
        </ul>
        <h3>Realizacja zamówienia</h3>
        <p>
          Dbamy o każdy etap realizacji zamówienia - od doradztwa, przez
          bezpłatny pomiar i wycenę, aż do montażu i serwisowania.
        </p>
        <h2>Dlaczego SPECROLL</h2>
        <p>
          Dzięki doświadczeniu, dostosowujemy rozwiązania do indywidualnych
          potrzeb klientów. Wybierając SPECROLL, wybierają Państwo jakość,
          niezawodność i satysfakcję. Zapraszamy do kontaktu!
        </p>
      </div>
    </div>
  );
}
