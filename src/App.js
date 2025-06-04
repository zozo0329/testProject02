import { useState } from "react";
import AppStyle from "./App.module.css";
import Form from "./Components/Form/Form";
import OutputList from "./Components/OutputList/OutputList";
function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const dataHandler = (userData) => {
    console.log("USERDATA: ", userData);
    setUserInfo((prev) => {
      return [...prev, userData];
    });
  };
  return (
    <div clasName={AppStyle.HERO}>
      <div className={AppStyle}>
        <Form dataHandler={dataHandler} setIsOn={setIsOn} />
        {!isOn && <h1>No Users found.</h1>}
        {isOn && <OutputList userInfo={userInfo} />}
        {/* <OutputList userInfo={userInfo} /> */}
      </div>
    </div>
  );
}

export default App;
