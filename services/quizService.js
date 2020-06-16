import quizRepository from '../repository/quiz/quizRepository';

const addQuiz = async (slug, title, color, answers, questions) => {
  if (answers.length !== questions.length) return false;

  let questionsCopy = [...questions];

  questionsCopy = questionsCopy.map((question, index) => {
    return { question, answers: answers[index] };
  });

  let quiz = { slug, title, color, questions: questionsCopy };
  return await quizRepository.insertQuiz(quiz);
};

export default { addQuiz };
