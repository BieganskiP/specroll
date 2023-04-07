import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setScrolled } from "../../store/scrollSlice";

import Hero from "../../component/hero/Hero";
import Process from "../../component/process/Process";
import Invest from "../../component/invest/Invest";
import WhyUs from "../../component/whyUs/WhyUs";

import css from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          dispatch(setScrolled(true));
        } else {
          dispatch(setScrolled(false));
        }
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    const trigger = document.getElementById("scrollTrigger");
    if (trigger) {
      observer.observe(trigger);
    }

    return () => {
      if (trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [handleIntersection]);

  return (
    <div>
      <div id="scrollTrigger" className={css.trigger}></div>
      <Hero />
      <Process />
      <Invest />
      <WhyUs />
    </div>
  );
}
