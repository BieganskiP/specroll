
import { useMediaQuery } from "react-responsive";
import css from "./Hamburger.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../store/hamburgerSlice";

export default function Hamburger() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isActive = useSelector((state) => state.hamburger.isActive);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  const activeClass = isActive ? css.active : "";

  if (isDesktop) {
    return null;
  }

  return (
    <div
      className={`${css.menuButton} ${activeClass}`}
      onClick={handleMenuClick}
    >
      <span className={`${css.bar}`}></span>
      <span className={`${css.bar}`}></span>
      <span className={`${css.bar}`}></span>
    </div>
  );
}
