import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { Background, Card, CardTitle } from '../components/styles';
import Head from 'next/head';
import Router from 'next/router';
import { blue } from '@material-ui/core/colors';
import QuizForm from './home/QuizForm';
import QuestionForm from './home/QuestionForm';
import ResultsForm from './home/ResultsForm';

import QuizRepository from '../repository/quiz/quizRepository';
import QuizService from '../services/quizService';

const Index = ({ slugs }) => {
  const [color, setColor] = useState(blue[300]);
  const [step, setStep] = useState(0);
  const [questionCount, _setQuestionCount] = useState(1);
  const [slug, _setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [answers, _setAnswers] = useState([[{ text: '', value: 0 }]]);
  const [questions, setQuestions] = useState(['']);
  const [answerCountError, setAnswerCountError] = useState(false);
  const [results, setResults] = useState([]);
  const [slugInUse, setSlugInUse] = useState(false);

  const setSlug = (slug) => {
    if (slugs.includes(slug)) {
      setSlugInUse(true);
    } else setSlugInUse(false);

    _setSlug(slug);
  };

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
                  slugInUseState={{ slugInUse, setSlugInUse }}
                />
              )}
              {step > 0 && step <= questionCount && (
                <QuestionForm
                  answersState={{ answers: answers[step - 1], setAnswers }}
                  questionState={{ question: questions[step - 1], setQuestion }}
                  answerCountErrorState={{
                    answerCountError,
                    setAnswerCountError,
                  }}
                />
              )}
              {step > questionCount && (
                <ResultsForm resultsState={{ results, setResults }} />
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
                        step <= questionCount &&
                        (answers[step - 1] === undefined ||
                          answers[step - 1].length === 0)
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
                  disabled={slugInUse}
                  className="btn col-12 mt-2"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (
                      step > 0 &&
                      step <= questionCount &&
                      (answers[step - 1] === undefined ||
                        answers[step - 1].length === 0)
                    ) {
                      setAnswerCountError(true);
                    } else if (step <= questionCount) {
                      setStep(step + 1);
                    } else {
                      const response = await QuizService.addQuiz(
                        slug,
                        title,
                        color,
                        answers,
                        questions,
                        results
                      );
                      if (response.success) Router.push(`/quiz/${slug}`);
                      else alert('Erro ao cadastrar!');
                    }
                  }}
                >
                  {step > questionCount ? 'Finalizar cadastro' : 'Próxima'}
                </button>
              </div>
              <div className="text-center mt-3">
                Página {parseInt(step) + 1} de{' '}
                {questionCount === '' ? 2 : parseInt(questionCount) + 2}
              </div>
            </div>
          </div>
        </Card>
      </Background>
    </>
  );
};

export async function getServerSideProps(context) {
  const slugsList = await QuizRepository.getAllSlugs();

  return {
    props: {
      slugs: slugsList,
    },
  };
}

export default withTheme(Index);
