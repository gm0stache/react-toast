import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.use(ToastContext);
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
