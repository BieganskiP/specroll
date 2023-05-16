import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import css from "./Process.module.css";
import data from "../../staticData/process.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTape,
  faTags,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

function Card({ header, description, animationDirection, icon }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const startingPosition = {
    left: "translate3d(-100px, 0, 0)",
    right: "translate3d(100px, 0, 0)",
    bottom: "translate3d(0, 100px, 0)",
  };

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translate3d(0, 0, 0)"
      : startingPosition[animationDirection],
    config: { ...config.default },
    delay: 300,
  });

  return (
    <animated.div ref={ref} className={css.card} style={animation}>
      <FontAwesomeIcon icon={icon} className={css.icon} />
      <h3 className={css.header}>{header}</h3>
      <p className={css.description}>{description}</p>
    </animated.div>
  );
}

export default function Process() {
  const animationDirections = ["left", "right", "left"];
  const icons = [faTape, faTags, faScrewdriverWrench];

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Proces</h2>
      <div className={css.container}>
        {data.map((item, index) => (
          <Card
            key={item.id}
            header={item.header}
            description={item.description}
            animationDirection={animationDirections[index]}
            icon={icons[index]}
          />
        ))}
      </div>
    </div>
  );
}
