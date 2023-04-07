import css from "./Header.module.css";
import { useSelector } from "react-redux";

import Hamburger from "../hamburger/Hamburger";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

export default function Header() {
  const scrolled = useSelector((state) => state.scroll.scrolled);

  return (
    <div className={`${css.wrapper} ${scrolled ? css.scrolled : ""}`}>
      <div className={css.container}>
        <Logo />
        <div className={css.sideContainer}>
          <Nav />
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
