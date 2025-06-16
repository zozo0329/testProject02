import React, { useState } from "react";
import FormStyle from "./Form.module.css";
import MouseClick from "./Sound/mouse-click-290204.mp3";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
const Form = ({ dataHandler, setIsOn }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const confirmHandler = () => {
    console.log("BACKDROP CLICKED");
    setError();
  };
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
    if (name.trim().length === 0) {
      setError({ title: "Error", message: "Please Enter name" });
      return;
    }
    if (+age.trim().length === 0) {
      setError({
        title: "No Age",
        message: "Please Enter Age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Text",
        message: "Invalid Age",
      });
      return;
    }
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
  return (
    <Card className={FormStyle.Hero}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          confirmHandler={confirmHandler}
        />
      )}
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
          <Button type="submit" onClick={mouseClickHandler}>
            Add
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
