function Progress({ maxPossibleScore, answer, index, numQuestions, points }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>

      <p>
        <strong>
          {points} / {maxPossibleScore}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
