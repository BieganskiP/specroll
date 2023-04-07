import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

import css from "./CalltoAction.module.css";

export default function CallToAction() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <button onClick={handleClick} className={css.button}>
      Zamów bezpłatną wycene
    </button>
  );
}
