import React, { useState } from "react";
import FormStyle from "./Form.module.css";
const Form = ({ dataHandler }) => {
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
    // CLEANER
    setName("");
    setAge("");
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
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
