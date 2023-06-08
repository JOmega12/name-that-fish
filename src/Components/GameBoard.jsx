import "./styles/game-board.css";
import { Images } from "../assets/images";

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

export const GameBoard = ({input, currentCount, setCurrentCount, setInput, checkCorrect, unCheckCorrect, setCheckCorrect, setUncheckCorrect, answersLeft, setAnswersLeft, setIsGameOver}) => {

  const nextFishToName = initialFishes[currentCount];

  const takeOutAnswers = () => {
    if(initialFishes.length === 0) {
      setIsGameOver(true)
    } else {
      const updatedAnswersLeft = [...answersLeft].filter((answer)=>{
        return answer.toLowerCase() !== input.toLowerCase()
      })
      setAnswersLeft(updatedAnswersLeft);
    }
  }

  const finishGame = () => {
    if(initialFishes.length === 0) {
      setIsGameOver(true)
    }
  }

  const nextFishCount = (e) => {
    e.preventDefault();


    //i know that the bug has to do with something about the current Count
    if(input === nextFishToName.name) {
      setCurrentCount(currentCount + 1);
      setCheckCorrect(checkCorrect + 1);
      takeOutAnswers();
      // finishGame();
    } else {
      setUncheckCorrect(unCheckCorrect + 1)
    }
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => nextFishCount(e)}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" 
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
