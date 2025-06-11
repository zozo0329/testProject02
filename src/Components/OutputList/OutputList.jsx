import React from "react";
import ListStyle from "./OutputList.module.css";
const OutputList = ({ userInfo }) => {
  return (
    <div className={ListStyle.HERO}>
      <div className={ListStyle.list}>
        <ul>
          <p>users:</p>
          {userInfo.map((value) => {
            return (
              <li key={value.id}>
                Name: {value.name}, {value.age} Years Old
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OutputList;
