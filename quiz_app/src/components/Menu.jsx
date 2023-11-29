import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>Enter Your Name: </label>
      <input
        type="text"
        placeholder="Ex.John Smith"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setUserName(e.target.value);
            setGameState("Playing");
          }
        }}
      />
      <button
        onClick={() => {
          setGameState("Playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
