import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { Background, Card, CardTitle } from '../components/styles';
import Head from 'next/head';
import { blue } from '@material-ui/core/colors';
import QuizForm from './home/QuizForm';
import QuestionForm from './home/QuestionForm';
import QuizService from '../services/quizService';

const Index = () => {
  const [color, setColor] = useState(blue[300]);
  const [step, setStep] = useState(0);
  const [questionCount, _setQuestionCount] = useState(1);
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [answers, _setAnswers] = useState([[{ text: '', value: 0 }]]);
  const [questions, setQuestions] = useState(['']);
  const [answerCountError, setAnswerCountError] = useState(false);

  const setAnswers = (newAnswers) => {
    const answersCopy = [...answers];
    answersCopy[step - 1] = newAnswers;
    _setAnswers(answersCopy);
  };

  const setQuestion = (question) => {
    const questionsCopy = [...questions];
    questionsCopy[step - 1] = question;
    setQuestions(questionsCopy);
  };

  const setQuestionCount = (questionCount) => {
    if (questionCount > answers.length) {
      const answersCopy = [...answers];
      const questionsCopy = [...questions];
      let x;
      for (x = answers.length; x < questionCount; x += 1) {
        answersCopy.push([{ text: '', value: 0 }]);
        questionsCopy.push('');
      }
      _setAnswers(answersCopy);
      setQuestions(questionsCopy);
    }
    _setQuestionCount(questionCount);
  };

  return (
    <>
      <Head>
        <title>NextQuiz</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Background color={color}>
        <Card>
          <CardTitle>Seja bem vindo ao NextQuiz!</CardTitle>
          <h3 className="mt-2" style={{ fontWeight: '200', fontSize: 20 }}>
            Por favor cadastre seu questionário:
          </h3>
          <hr />
          <div className="row">
            <div className="col-12 p-0">
              {step === 0 && (
                <QuizForm
                  slugState={{ slug, setSlug }}
                  titleState={{ title, setTitle }}
                  questionCountState={{ questionCount, setQuestionCount }}
                  colorState={{ color, setColor }}
                />
              )}
              {step > 0 && (
                <QuestionForm
                  answersState={{ answers: answers[step - 1], setAnswers }}
                  questionState={{ question: questions[step - 1], setQuestion }}
                  answerCountErrorState={{
                    answerCountError,
                    setAnswerCountError,
                  }}
                />
              )}
              <div className="col-12 d-flex m-0 p-0">
                {step > 0 && (
                  <button
                    type="button"
                    style={{ color: 'white', flex: 1 }}
                    className="btn col-12 mt-2 btn-secondary mr-2"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        answers[step - 1] === undefined ||
                        answers[step - 1].length === 0
                      ) {
                        setAnswerCountError(true);
                      } else setStep(step - 1);
                    }}
                  >
                    Anterior
                  </button>
                )}
                <button
                  type="button"
                  style={{ backgroundColor: color, color: 'white', flex: 1 }}
                  className="btn col-12 mt-2"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (
                      step > 0 &&
                      (answers[step - 1] === undefined ||
                        answers[step - 1].length === 0)
                    ) {
                      setAnswerCountError(true);
                    } else if (step < questionCount) {
                      setStep(step + 1);
                    } else {
                      const response = await QuizService.addQuiz(
                        slug,
                        title,
                        color,
                        answers,
                        questions
                      );
                      console.log(response);
                    }
                  }}
                >
                  Próxima
                </button>
              </div>
              <div className="text-center mt-3">
                Página {parseInt(step) + 1} de{' '}
                {questionCount === '' ? 1 : parseInt(questionCount) + 1}
              </div>
            </div>
          </div>
        </Card>
      </Background>
    </>
  );
};

export default withTheme(Index);
