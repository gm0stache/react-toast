import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  return <ToastContext value={{ toasts, setToasts }}>{children}</ToastContext>;
}

export default ToastProvider;
