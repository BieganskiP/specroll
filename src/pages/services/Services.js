import css from "./Services.module.css";
import data from "../../staticData/productsData.json";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

function ProductCard({ name, description, srcImg, animationDirection }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const startingPosition = {
    left: "translate3d(-100px, 0, 0)",
    right: "translate3d(100px, 0, 0)",
  };

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translate3d(0, 0, 0)"
      : startingPosition[animationDirection],
    config: { ...config.default },
  });

  return (
    <animated.div ref={ref} className={css.product} style={animation}>
      <img src={`${srcImg}`} alt={name} />
      <div className={css.textContainer}>
        <h2 className={css.header}>{name}</h2>
        <p className={css.text}>{description}</p>
      </div>
    </animated.div>
  );
}

export default function Services() {
  const animationDirections = ["left", "right"];

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Nasze usługi</h1>
      <div className={css.container}>
        {data.map((product, index) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            description={product.description}
            srcImg={product.url}
            animationDirection={animationDirections[index % 2]}
          />
        ))}
      </div>
    </div>
  );
}
