import { useState } from "react";
import "./styles/score-board.css";
const incorrectCount = 0;
const correctCount = 0;

export const ScoreBoard = ({ checkCorrect, unCheckCorrect, answersLeft }) => {
  const finalCorrectCount = correctCount + checkCorrect;
  const finalIncorrectCount = incorrectCount + unCheckCorrect;

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {finalIncorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {finalCorrectCount}</div>
    </div>
  );
};
