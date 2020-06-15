import db from '../../repository';

const ref = db().collection('quiz');

const getQuizById = async (id) => {
  const quiz = await ref.doc(id).get();
  let retQuiz;
  if (quiz.exists) {
    retQuiz = { ...quiz.data(), questions: [] };
    const questions = await ref.doc(id).collection('questions').get();
    const answersPromises = [];
    questions.forEach((doc) => {
      answersPromises.push(doc.ref.collection('answers').get());
      retQuiz.questions.push(doc.data());
    });
    const answersResp = await Promise.all(answersPromises);
    answersResp.forEach((answers, index) => {
      retQuiz.questions[index].answers = [];
      answers.forEach((answer) => {
        retQuiz.questions[index].answers.push(answer.data());
      });
    });
  }
  return retQuiz;
};

const searchQuizBySlug = async (slug) => {
  const quizList = await ref.where('slug', '==', slug).get();
  let retQuiz;
  if (quizList.docs.length > 0)
    retQuiz = await getQuizById(quizList.docs[0].id);
  return retQuiz;
};

export default { getQuizById, searchQuizBySlug };
