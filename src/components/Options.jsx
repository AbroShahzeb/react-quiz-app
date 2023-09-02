function Options({ question, dispatch, answer }) {
  const isAnswered = answer !== null;
  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option  ${
            isAnswered ? (answer === index ? "correct" : "wrong") : ""
          } ${index === answer ? "answer" : ""}`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
