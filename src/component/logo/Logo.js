import data from "../../staticData/companyInfo.json";
import css from "./Logo.module.css";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      {data.fullCompanyName}
    </Link>
  );
}
