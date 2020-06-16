import db from '../../repository';

const ref = db().collection('quiz');

const searchQuizBySlug = async (slug) => {
  const quizList = await ref.where('slug', '==', slug).get();
  if (quizList.docs.length > 0) return quizList.docs[0].data();

  return undefined;
};

const insertQuiz = async (quiz) => {
  const newQuiz = await ref.add(quiz);
  return newQuiz.id;
};

const getAllSlugs = async () => {
  const quizList = await ref.get();
  if (quizList.docs.length === 0) return [];

  const slugsList = quizList.docs.map((quiz) => {
    return quiz.data().slug;
  });

  return slugsList;
};

export default { searchQuizBySlug, insertQuiz, getAllSlugs };
