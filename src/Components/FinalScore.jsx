const correctCount = 0;
const totalCount = 0;
export const FinalScore = ({checkCorrect, unCheckCorrect}) => (

  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{checkCorrect}</p>
      <hr />
      <p>{unCheckCorrect}</p>
    </div>
  </div>
);
