import React from "react";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const handleOpenToast = (message, variant) => {
    const nextToasts = [...toasts];
    nextToasts.push({ id: Math.random(), message, variant });
    setToasts(nextToasts);
  };

  const handleCloseToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  const closeAll = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, handleOpenToast, handleCloseToast, closeAll }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
