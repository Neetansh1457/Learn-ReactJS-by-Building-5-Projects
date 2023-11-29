import react, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Superman");
  const [age, setAge] = useState(21);
  const [height, setHeight] = useState(190);
  const [power, setSuperPower] = useState("God");
  const [displayChar, setDiplayChar] = useState(false);

  return (
    <div className="app">
      <h1>Build A Hero</h1>
      <div className="">
        <label>Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label>Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <label>Super Power: </label>
        <input
          type="text"
          onChange={(e) => {
            setSuperPower(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setDiplayChar(true);
        }}
      >
        Display Character
      </button>
      <div>
        <h1>Hero Information</h1>
        {displayChar && (
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{height}</li>
            <li>{power}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
