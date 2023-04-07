import React from "react";
import css from "./Invest.module.css";
import data from "../../staticData/whyUs.json";

import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

function Card({ title, description }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    from: { transform: "translate3d(0, 40px, 0)", opacity: 0 },
    to: {
      transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 40px, 0)",
      opacity: inView ? 1 : 0,
    },
    config: config.stiff,
  });

  return (
    <animated.div className={css.card} ref={ref} style={animation}>
      <h3 className={css.header}>{title}</h3>
      <p className={css.description}>{description}</p>
    </animated.div>
  );
}

export default function Invest() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.title}>Dlaczego warto zainwestować?</h2>
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
