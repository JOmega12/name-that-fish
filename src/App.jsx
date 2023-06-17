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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const isGameOver = currentIndex === 4;

  const answersLeft = initialFishes.map(item => item.name).slice(currentIndex);
  
  const handleAnswer = (name) => {
    if (name === initialFishes[currentIndex].name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="App">
      {isGameOver && (
        <FinalScore
          correctCount={correctCount}

          totalFishes={initialFishes.length}
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
            setCurrentIndex={setCurrentIndex}
            handleAnswer={handleAnswer}
            fishData={initialFishes[currentIndex]}
          />
        </header>
      )}
    </div>
  );
}

export default App;
