import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [messageVariant, setMessageVariant] = React.useState("");
  const [message, setMessage] = React.useState("Message");

  const { toasts, setToasts } = React.use(ToastContext);

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();

        const nextToastItems = [
          ...toasts,
          { type: messageVariant, message: message, id: crypto.randomUUID() },
        ];
        setToasts(nextToastItems);

        setMessage("");
        setMessageVariant("");
      }}
    >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              return (
                <label htmlFor={`variant-${variant}`} key={crypto.randomUUID()}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    onClick={() => setMessageVariant(variant)}
                    key={crypto.randomUUID()}
                    checked={variant === messageVariant}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
