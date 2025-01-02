import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((t) => {
        return (
          <li className={styles.toastWrapper} key={t.id}>
            <Toast type={t.type} message={t.message} />
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
