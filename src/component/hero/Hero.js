import React from "react";
import css from "./Hero.module.css";
import CallToAction from "../callToAction/CallToAction";
import { useSpring, animated } from "react-spring";

export default function Hero() {
  const h1Animation = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  const h2Animation = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  const callToActionAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 400,
  });

  const pAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 600,
  });

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <animated.h1 style={h1Animation} className={css.header}>
          Rolety | Żaluzje | Plisy | Bramy garażowe | Markizy | Moskitiery
        </animated.h1>
        <animated.div style={callToActionAnimation}>
          <CallToAction />
        </animated.div>
        <animated.h2 style={h2Animation} className={css.subHeader}>
          Profesjonalizm w każdym calu: Montaż, Serwis i Naprawy.
        </animated.h2>
        <animated.p style={pAnimation} className={css.text}>
          DORADZTWO, WYCENA I POMIAR !!! GRATIS !!!
        </animated.p>
      </div>
    </div>
  );
}
