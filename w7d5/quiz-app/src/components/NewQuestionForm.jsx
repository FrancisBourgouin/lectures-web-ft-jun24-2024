import useForm from "../hooks/useForm";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;

  const initialFormData = { question: "", answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialFormData, onSubmit);
  // const [newQuestionFormData, setNewQuestionFormData] = useState("");

  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");

  return (
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your question"
        name="question"
        onChange={handleChange}
        value={formData.question}
      />
      <input
        type="text"
        placeholder="Enter your answer"
        name="answer"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Add question!</button>
    </form>
  );
}
