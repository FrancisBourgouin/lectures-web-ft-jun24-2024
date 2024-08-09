import useMode from "./hooks/useMode";
import useQuiz from "./hooks/useQuiz";

import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import NewQuestionForm from "./components/NewQuestionForm";
import CurrentScore from "./components/CurrentScore";

import "./App.css";

import { questionList } from "./data/quizData";

function App() {
  // Stateful information, what do we need to know?
  const [mode, switchMode] = useMode("QUIZ");
  // const [scoreMode, switchScoreMode] = useMode("QUIZ")

  const { quizState, updateQuiz } = useQuiz(questionList);


  const questionSubmit = formData => updateQuiz("update", formData)

  const addSubmit = formData => updateQuiz("add", formData)


  // updateQuiz("add", formData)
  // updateQuiz({type:"add", payload:formData})
  // dispatch({type:"add", payload:formData})
  return (
    <>
      <Header switchMode={switchMode} mode={mode} />
      <main>
        {mode === "QUIZ" && (
          <QuestionForm currentQuestion={quizState.currentQuestion} onSubmit={questionSubmit} />
        )}
        {mode === "ADD" && <NewQuestionForm onSubmit={addSubmit} />}
        <CurrentScore score={quizState.scoreData} />
      </main>
    </>
  );
}

export default App;
