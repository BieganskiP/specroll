import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import css from "./Modal.module.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Modal() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const openClass = isOpen ? css.open : "";

  const [state, handleSubmit] = useForm("xwkjnqen");

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (state.succeeded) {
    return (
      <div className={`${css.modal} ${openClass}`}>
        <div className={css.modalContent}>
          <h2>Dziękujemy za wiadomość!</h2>
          <button className={css.closeButton} onClick={handleClose}>
            Zamknij
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${css.modal} ${openClass}`}>
      <div className={css.modalContent}>
        <h2 className={css.header}>
          Zostaw nam wiadomość a my sie z toba skontaktujemy
        </h2>
        <form onSubmit={handleSubmit} className={css.contactForm}>
          <label htmlFor="name">Imię:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="phone">Numer Telefonu:</label>
          <input type="phone" id="phone" name="phone" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Napisz nam czego potrzebujesz:</label>
          <textarea id="message" name="message"></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className={css.button}
          >
            Wyślij
          </button>
        </form>
        <button className={css.closeButton} onClick={handleClose}>
          Zamknij
        </button>
      </div>
    </div>
  );
}
