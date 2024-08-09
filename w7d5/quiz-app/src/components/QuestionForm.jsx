import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { onSubmit, currentQuestion } = props;

  const initialFormData = { answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialFormData, onSubmit);

  if (!currentQuestion) {
    return <h1>HEY QUESTION IS CRASHING!</h1>;
  }

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <h2>{currentQuestion.prompt}</h2>
      <input
        type="text"
        placeholder="Enter your answer"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
      />
      <button>Check answer!</button>
    </form>
  );
}
