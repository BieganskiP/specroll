import css from "./Services.module.css";
import data from "../../staticData/productsData.json";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

function ProductCard({ product, animationDirection }) {
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
    delay: 300,
  });

  return (
    <animated.div ref={ref} className={css.product} style={animation}>
      <img src={product.imgSrc} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>{product.description}</p>
    </animated.div>
  );
}

export default function Services() {
  const animationDirections = ["left", "right"];

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1>Services</h1>
        {data.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            animationDirection={animationDirections[index % 2]}
          />
        ))}
      </div>
    </div>
  );
}
