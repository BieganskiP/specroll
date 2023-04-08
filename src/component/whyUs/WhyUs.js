import React from "react";
import css from "./WhyUs.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CountUpCard({ start, end, prefix, suffix, children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={css.card} ref={ref}>
      <h3 className={css.header}>
        {prefix}
        <CountUp start={inView ? start : end} end={end} duration={2} />
        {suffix}
      </h3>
      <p className={css.text}>{children}</p>
    </div>
  );
}

export default function WhyUs() {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 1991;

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Dlaczego my?</h2>
      <div className={css.container}>
        <CountUpCard start={0} end={yearsOfExperience}>
          Lata doświadczenia
        </CountUpCard>
        <CountUpCard start={0} end={10} prefix="Ponad " suffix=" tysięcy">
          Zadowolonych klientów
        </CountUpCard>
      </div>
    </div>
  );
}
