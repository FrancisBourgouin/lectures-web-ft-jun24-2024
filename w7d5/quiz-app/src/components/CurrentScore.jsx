export default function CurrentScore(props) {
  const { score } = props;

  const scorePercentage = Math.round((score.correctAnswers / score.totalAnswers) * 100);

  return (
    <>
      {!!score.totalAnswers && (
        <section className="CurrentScore">
          <p>{scorePercentage}%</p>
          <p>{score.totalAnswers} questions answered</p>
        </section>
      )}
    </>
  );
}
