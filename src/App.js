
import './App.css';
import {useState} from "react";
import Axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const getAge = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((resp) => {
    setInfo(resp.data);
  });
};
  return (
    <div className="App">
      Enter name: <input type = "text" onChange = {(event) => {
        setName(event.target.value);
      }}placeholder = "riya, sangamesh, etc"/>
      <button onClick = {getAge}>Predict Age</button>
      <h1>There are {info.count} people named <i>{name}</i>. Their average age is {info.age}.</h1>
    </div>
  );
}

export default App;
