import { useState } from "react";
import "./styles/game-board.css";


export const GameBoard = ({ handleAnswer, fishData }) => {
  const [input, setInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer(input);
    setInput('');
  }


  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
