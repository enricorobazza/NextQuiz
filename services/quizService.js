import axios from 'axios';

const addQuiz = async (slug, title, color, answers, questions, results) => {
  if (answers.length !== questions.length)
    return { success: false, data: 'Answers and questions dont match.' };

  let questionsCopy = [...questions];

  questionsCopy = questionsCopy.map((question, index) => {
    return { question, answers: answers[index] };
  });

  let quiz = { slug, title, color, questions: questionsCopy, results };

  try {
    const response = await axios.post('/api/quiz', { quiz });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

export default { addQuiz };
