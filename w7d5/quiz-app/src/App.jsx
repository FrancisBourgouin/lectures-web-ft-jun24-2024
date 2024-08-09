import useMode from "./hooks/useMode";
import useQuiz from "./hooks/useQuiz";

import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import NewQuestionForm from "./components/NewQuestionForm";
import CurrentScore from "./components/CurrentScore";

import "./App.css";

import { questionList } from "./data/quizData";
import useQuizReducer from "./hooks/useQuizReducer";

function App() {
  // Stateful information, what do we need to know?
  const [mode, switchMode] = useMode("QUIZ");
  // const [scoreMode, switchScoreMode] = useMode("QUIZ")

  const [state, dispatch] = useQuizReducer(questionList);

  const addSubmit = (formData) => dispatch({ type: "add", payload: formData })
  const updateSubmit = (formData) => dispatch({ type: "update", payload: formData })

  return (
    <>
      <Header switchMode={switchMode} mode={mode} />
      <main>
        {mode === "QUIZ" && (
          <QuestionForm
            currentQuestion={state.currentQuestion}
            onSubmit={updateSubmit}
          />
        )}
        {mode === "ADD" && <NewQuestionForm onSubmit={addSubmit} />}
        <CurrentScore score={state.scoreData} />
      </main>
    </>
  );
}

export default App;
