import React from "react";
import css from "./Footer.module.css";
import data from "../../staticData/companyInfo.json";

export default function Footer() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={`${css.item} ${css.logo}`}>{data.fullCompanyName}</div>
        <div className={css.item}>
          <a href={`mailto:${data.email}`} className={css.link}>
            {data.email}
          </a>
        </div>
        <div className={css.item}>
          <a href={`tel:${data.phoneNumbers[0]}`} className={css.link}>
            {data.phoneNumbers[0]}
          </a>
        </div>
        <div className={css.item}>
          <a href={`tel:${data.phoneNumbers[1]}`} className={css.link}>
            {data.phoneNumbers[1]}
          </a>
        </div>
        <div className={css.item}>{`NIP: ${data.nip}`}</div>
        <div className={css.item}>{`REGON: ${data.regon}`}</div>
      </div>
    </div>
  );
}
