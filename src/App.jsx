import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [currentCount, setCurrentCount] = useState(0);
  const [checkCorrect, setCheckCorrect] = useState(0);
  const [unCheckCorrect, setUncheckCorrect] = useState(0);
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "shark",
    "tuna",
  ]);
  const isGameOver = currentCount === 4;

  return (
    <div className="App">
      {isGameOver && (
        <FinalScore
          checkCorrect={checkCorrect}
          unCheckCorrect={unCheckCorrect}
        />
      )}
      {!isGameOver && (
        <header>
          <ScoreBoard
            input={input}
            setInput={setInput}
            currentCount={currentCount}
            setCurrentCount={setCurrentCount}
            checkCorrect={checkCorrect}
            setCheckCorrect={setCheckCorrect}
            unCheckCorrect={unCheckCorrect}
            setUncheckCorrect={setUncheckCorrect}
            answersLeft={answersLeft}
          />
          <GameBoard
            input={input}
            setInput={setInput}
            currentCount={currentCount}
            setCurrentCount={setCurrentCount}
            checkCorrect={checkCorrect}
            setCheckCorrect={setCheckCorrect}
            unCheckCorrect={unCheckCorrect}
            setUncheckCorrect={setUncheckCorrect}
            answersLeft={answersLeft}
            setAnswersLeft={setAnswersLeft}
          />
        </header>
      )}
    </div>
  );
}

export default App;
