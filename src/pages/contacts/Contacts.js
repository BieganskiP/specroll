import data from "../../staticData/companyInfo.json";
import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={css.wrapper}>
      <div className={css.divider}></div>
      <div className={css.container}>
        <div className={css.contactDetails}>
          <h2 className={css.header}>Dane kontaktowe</h2>
          <p className={css.email}>
            Email:{" "}
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.email}
            </a>
          </p>
          <p className={css.phoneNumbers}>
            {data.phoneNumbers.map((number, index) => (
              <span key={index}>
                {index > 0 && ", "}
                <a href={`tel:${number}`}>{number}</a>
              </span>
            ))}
          </p>
          <p className={css.nip}>NIP: {data.nip}</p>
          <p className={css.regon}>REGON: {data.regon}</p>
        </div>

        <h2 className={css.header}>Gdzie działamy?</h2>
        <p className={css.text}>
          Jesteśmy z Wałbrzycha ale działamy na terenie całej Polski
        </p>
        <p className={css.address}>Nasz adres:</p>
        <address>{data.address}</address>

        <div className={css.map}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.70527985280842!2d16.276288718640007!3d50.77029988503332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e56c8535fe6ab%3A0xce36bd9920c3c1d6!2sSpec-Rol!5e0!3m2!1spl!2spl!4v1676115441734!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
