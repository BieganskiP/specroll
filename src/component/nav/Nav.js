import css from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Nav() {
  const isDesktop = useMediaQuery({ maxWidth: 993 });
  const location = useLocation();

  if (isDesktop) {
    return null;
  }

  return (
    <div>
      <ul className={css.list}>
        <li className={css.link}>
          <Link to="/" className={location.pathname === "/" ? css.active : ""}>
            Strona Główna
          </Link>
        </li>
        <li className={css.link}>
          <Link
            to="/contacts"
            className={location.pathname === "/contacts" ? css.active : ""}
          >
            Kontakty
          </Link>
        </li>
        <li className={css.link}>
          <Link
            to="/services"
            className={location.pathname === "/services" ? css.active : ""}
          >
            Nasze Usługi
          </Link>
        </li>
        <li className={css.link}>
          <Link
            to="/about-us"
            className={location.pathname === "/about-us" ? css.active : ""}
          >
            O nas
          </Link>
        </li>
      </ul>
    </div>
  );
}
