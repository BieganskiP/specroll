import React from "react";
import css from "./Footer.module.css";
import data from "../../staticData/companyInfo.json";

export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={`${css.footerItem} ${css.footerCompanyName}`}>
        {data.fullCompanyName}
      </div>
      <div className={css.footerItem}>
        <a href={`mailto:${data.email}`} className={css.footerLink}>
          {data.email}
        </a>
      </div>
      <div className={css.footerItem}>
        <a href={`tel:${data.phoneNumbers[0]}`} className={css.footerLink}>
          {data.phoneNumbers[0]}
        </a>
      </div>
      <div className={css.footerItem}>
        <a href={`tel:${data.phoneNumbers[1]}`} className={css.footerLink}>
          {data.phoneNumbers[1]}
        </a>
      </div>
      <div className={css.footerItem}>{`NIP: ${data.nip}`}</div>
      <div className={css.footerItem}>{`REGON: ${data.regon}`}</div>
    </div>
  );
}
