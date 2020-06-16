import quizRepository from '../../../repository/quiz/quizRepository';

export default async (req, res) => {
  const { quiz } = req.body;
  const quizId = await quizRepository.insertQuiz(quiz);
  res.status(200).send(quizId);
};
