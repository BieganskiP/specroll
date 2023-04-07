import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function ScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationProps = useSpring({
    opacity: scrollY / 500,
  });

  return (
    <animated.div style={animationProps} className="content">
      Your content here
    </animated.div>
  );
}
