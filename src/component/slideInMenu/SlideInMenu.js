import { useSelector, useDispatch } from "react-redux";
import css from "./SlideInMenu.module.css";
import { Link, useLocation } from "react-router-dom";
import { toggleMenu } from "../../store/hamburgerSlice";
import ContactBar from "../contactBar/ContactBar";

export default function SlideInMenu() {
  const isActive = useSelector((state) => state.hamburger.isActive);
  const openClass = isActive ? css.open : "";
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLinkClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`${css.menu} ${openClass}`}>
      <ul className={css.list}>
        <li className={css.link}>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={location.pathname === "/" ? css.active : ""}
          >
            Strona Główna
          </Link>
        </li>
        <li className={css.link}>
          <Link
            to="/contacts"
            onClick={handleLinkClick}
            className={location.pathname === "/contacts" ? css.active : ""}
          >
            Kontakty
          </Link>
        </li>
        <li className={css.link}>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className={location.pathname === "/services" ? css.active : ""}
          >
            Nasze Usługi
          </Link>
        </li>
        <li className={css.link}>
          <Link
            to="/about-us"
            onClick={handleLinkClick}
            className={location.pathname === "/about-us" ? css.active : ""}
          >
            O nas
          </Link>
        </li>
      </ul>
      <ContactBar />
    </div>
  );
}
