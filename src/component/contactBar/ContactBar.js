import css from "./ContactBar.module.css";
import data from "../../staticData/companyInfo.json";

export default function ContactBar() {
  return (
    <ul className={css.wrapper}>
      <li className={css.link}>
        <a href={"mailto:" + data.email}>{data.email}</a>
      </li>
      <li className={css.link}>
        <a href={"tel:" + data.phoneNumbers[0]}>{data.phoneNumbers[0]}</a>
      </li>
      <li className={css.link}>
        <a href={"tel:" + data.phoneNumbers[1]}>{data.phoneNumbers[1]}</a>
      </li>
    </ul>
  );
}
