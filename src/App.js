import AppStyle from "./App.module.css";
import Form from "./Components/Form/Form";
function App() {
  const dataHandler = (userData) => {
    console.log("USERDATA: ", userData);
    // Do something with userData
  };
  return (
    <div clasName={AppStyle}>
      <Form dataHandler={dataHandler} />
    </div>
  );
}

export default App;
