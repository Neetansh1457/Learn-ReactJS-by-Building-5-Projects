import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { questions } from "../helpers/Questions";

function Endscreen() {
  const { score, setScore, setGameState, userName } =
    useContext(GameStateContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("Menu");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Endscreen;
