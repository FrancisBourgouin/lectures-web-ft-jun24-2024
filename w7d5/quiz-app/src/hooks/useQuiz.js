import { useState } from "react";
import { addQuestionToList } from "../helpers/quizHelpers";


export default function useQuiz(initialQuestions) {
  // const [scoreData, setScoreData] = useState({
  //   currentQuestionIndex: 0,
  //   correctAnswers: 0,
  //   totalAnswers: 0,
  // });

  // const [questions, setQuestions] = useState(initialQuestions);


  const [quizState, setQuizState] = useState({
    scoreData:{
      currentQuestionIndex: 0,
      correctAnswers: 0,
      totalAnswers: 0,
    },
    questions:initialQuestions,
    currentQuestion:initialQuestions[0]
  })
  // const currentQuestion = quizState.questions[quizState.scoreData.currentQuestionIndex];

  const updateScore = (formData) => {
    const { answer } = formData;
    const updatedScoreData = { ...scoreData };

    updatedScoreData.totalAnswers++;

    if (currentQuestion.answer === answer) {
      updatedScoreData.correctAnswers++;
    }

    updatedScoreData.currentQuestionIndex =
      (updatedScoreData.currentQuestionIndex + 1) % questions.length;

    
    const newQuestion = quizState.questions[updatedScoreData.currentQuestionIndex]
    // setScoreData(updatedScoreData);

    setQuizState({...quizState, scoreData:updatedScoreData, currentQuestion:newQuestion})
  };

  const addQuestion = (formData) => {
    const updatedQuestions = addQuestionToList(questions, formData);
    // setQuestions(updatedQuestions);

    setQuizState({...quizState, questions:updatedQuestions})
  };

  // return { scoreData:quizState.scoreData, currentQuestion:quizState.currentQuestion, updateScore, addQuestion };

  const updateQuiz = (type, formData) => {
    if(type === "update") {
      updateScore(formData)
    }
    if(type === "add") {
      addQuestion(formData)
    }
  }

  return {quizState, updateQuiz}
}
