import React from "react";
import CardStyle from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={`${CardStyle} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
