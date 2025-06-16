import React from "react";
import ButtonStyle from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={ButtonStyle.btns}>
      <button type={props.type || "button"} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
