import db from '../../repository';

const ref = db().collection('quiz');

const getQuiz = async (id) => {
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

export default { getQuiz };
