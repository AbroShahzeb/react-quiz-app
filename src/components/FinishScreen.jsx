function FinishScreen({ points, maxPossibleScore, highScore, dispatch }) {
  const scorePercentage = (points / maxPossibleScore) * 100;

  return (
    <>
      <p className='result'>
        You score <strong>{points}</strong> out of {maxPossibleScore} (
        {Math.ceil(scorePercentage)}%)
      </p>
      <p className='highscore'>Highscore: {highScore}</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
