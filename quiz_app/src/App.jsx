import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Endscreen from "./components/EndScreen";
import { GameStateContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("Menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "Menu" && <Menu />}
        {gameState === "Playing" && <Quiz />}
        {gameState === "Finished" && <Endscreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
