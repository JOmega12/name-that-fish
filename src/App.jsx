import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import { useState } from "react";
import { Images } from "./assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const isGameOver = currentCount === 4;

  const answersLeft = initialFishes.map(item => item.name).slice(currentCount);
  console.log(answersLeft);

  
  const handleAnswer = (name) => {
    if (name === initialFishes[currentCount].name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setCurrentCount(currentCount + 1);
  };
  return (
    <div className="App">
      {isGameOver && (
        <FinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      )}
      {!isGameOver && (
        <header>
          <ScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <GameBoard
            setCurrentCount={setCurrentCount}
            handleAnswer={handleAnswer}
            fishData={initialFishes[currentCount]}
          />
        </header>
      )}
    </div>
  );
}

export default App;
