import { useReducer } from "react";
import { addQuestionToList } from "../helpers/quizHelpers";

export default function useQuizReducer(initialQuestions) {
  const updateScore = (state, formData) => {
    const { answer } = formData;
    const updatedScoreData = { ...state.scoreData };

    updatedScoreData.totalAnswers++;

    if (currentQuestion.answer === answer) {
      updatedScoreData.correctAnswers++;
    }

    updatedScoreData.currentQuestionIndex =
      (updatedScoreData.currentQuestionIndex + 1) % questions.length;

    const newQuestion = state.questions[updatedScoreData.currentQuestionIndex];

    return { ...state, currentQuestion: newQuestion, scoreData: updatedScoreData };
  };

  const addQuestion = (state, formData) => {
    const updatedQuestions = addQuestionToList(state.questions, formData);
    // setQuestions(updatedQuestions);

    return { ...state, questions: updatedQuestions };
  };

  const quizReducer = (state, action) => {
    if (action.type === "add") {
      return addQuestion(state, action.payload);
    }

    if (action.type === "update") {
      return updateScore(state, action.payload);
    }
  };

  const initialQuizState = {
    scoreData: {
      currentQuestionIndex: 0,
      correctAnswers: 0,
      totalAnswers: 0,
    },
    questions: initialQuestions,
    currentQuestion: initialQuestions[0],
  };


  const [state, dispatch] = useReducer(quizReducer, initialQuizState)


  return [state, dispatch];
}
