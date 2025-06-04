import React, { useState } from "react";
import FormStyle from "./Form.module.css";
import MouseClick from "./Sound/mouse-click-290204.mp3";
import OySound from "./Sound/oi-85782.mp3";
const Form = ({ dataHandler, setIsOn }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    console.log("NAME: ", name);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
    console.log("AGE: ", age);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name,
      age,
      id: Math.random().toString(),
    };
    dataHandler(userData);
    setIsOn(true);
    // CLEANER
    setName("");
    setAge("");
  };
  const mouseClickHandler = () => {
    const audio = new Audio(MouseClick);
    audio.play();
  };
  const MouseEnterHandler = () => {
    const whenHover = new Audio(OySound);
    whenHover.play();
  };
  return (
    <div className={FormStyle.Hero}>
      <form onSubmit={submitHandler}>
        <div className={FormStyle.Inputs}>
          <input
            type="text"
            placeholder="Name"
            onChange={nameChangeHandler}
            value={name}
          />
          <input
            type="number"
            placeholder="Age"
            onChange={ageChangeHandler}
            value={age}
          />
        </div>
        <div className={FormStyle.btns}>
          <button
            type="submit"
            onClick={mouseClickHandler}
            onMouseEnter={MouseEnterHandler}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
