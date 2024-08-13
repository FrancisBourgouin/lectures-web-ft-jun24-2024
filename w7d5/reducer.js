const initialQuizState = {
  scoreData: {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    totalAnswers: 0,
  },
  questions: initialQuestions,
  currentQuestion: initialQuestions[0],
};

const addQuestion = (state, question) => {
  ...state
  ...questions
  + question
  updateState
}


const toggleLike = (state, photoId)



state.favorites.includes(photoId)