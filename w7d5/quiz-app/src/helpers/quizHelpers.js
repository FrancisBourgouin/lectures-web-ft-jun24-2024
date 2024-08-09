
// addQuestionToTheList

export const addQuestionToList = (questionList, questionData) => {
  const {question, answer} = questionData

  const newQuestion = {id: questionList.length + 1, prompt:question, answer}

  const updatedQuestionList = [...questionList, newQuestion]

  return updatedQuestionList
}

// validateTheQuestionAnswer