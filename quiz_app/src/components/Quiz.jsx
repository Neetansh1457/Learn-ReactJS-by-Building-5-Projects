import "../App.css";
import { questions } from "../helpers/Questions";
import { useContext, useState } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (optionChosen === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const finishQuiz = () => {
    if (optionChosen === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setGameState("Finished");
  };

  return (
    <div className="Quiz">
      <h1>{questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {questions[currentQuestion].optionA}
        </button>

        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {questions[currentQuestion].optionB}
        </button>

        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {questions[currentQuestion].optionC}
        </button>

        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
