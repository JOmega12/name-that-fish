
export const FinalScore = ({ correctCount, incorrectCount }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{incorrectCount}</p>
    </div>
  </div>
);
