import React from "react";
import ErrorModalStyle from "./ErrorModal.module.css";
import Button from "../Button/Button";
const ErrorModal = ({ title, message, confirmHandler }) => {
  return (
    <>
      <div className={ErrorModalStyle.backdrop} onClick={confirmHandler} />
      <div className={ErrorModalStyle.modal}>
        <div className={ErrorModalStyle.modalContent}>
          <div className={ErrorModalStyle.modalHeader}>
            <h2>{title}</h2>
          </div>
          <div className={ErrorModalStyle.modalBody}>
            <p>{message}</p>
          </div>
          <div className={ErrorModalStyle.modalFooter}>
            <Button onClick={confirmHandler}>Close</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
