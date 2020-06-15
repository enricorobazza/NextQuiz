import React, { useState, useEffect } from 'react';
import {
  // Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Head from 'next/head';
import { Pagination } from '@material-ui/lab';
import {
  Button,
  Background,
  Card,
  CardTitle,
  CardFooter,
  CardActions,
  QuestionTitle,
} from './styles';
// import dataJSON from '../../data.json';
// import resultsJSON from '../../results.json';

import quizRepository from '../../repository/quiz/quizRepository';

Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

const Quiz = ({ data, results, color, title }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [value, setValue] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(() => {
    setValue(answers[currentQuestion] || -1);
  }, [currentQuestion]);

  const setCurrentAnswer = () => {
    let newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const getFinalValue = () => {
    let sum = 0;
    data.forEach((question, index) => {
      if (answers[index] && answers[index] >= 0)
        sum += question.answers[answers[index]].value;
    });
    return sum;
  };

  const handleChange = (value) => {
    setCurrentAnswer();
    if (value >= data.length) {
      console.log(answers);
      const media = getFinalValue() / data.length;
      if (media < 36) setResult(results[0]);
      else if (media < 71) setResult(results[1]);
      else setResult(results[2]);
      return;
    }
    setCurrentQuestion(value);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/pages/quiz/styles.css" />
      </Head>
      <Background color={color}>
        <Card className="card">
          <CardContent>
            <CardTitle gutterBottom>{title}</CardTitle>
            <hr />
            <p id="question"></p>
            <form id="answers" action="#"></form>
          </CardContent>
          <CardActions>
            {result && <div dangerouslySetInnerHTML={{ __html: result }}></div>}
            {!result && data && (
              <form action="#">
                <QuestionTitle>{data[currentQuestion].question}</QuestionTitle>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="answer"
                    name="answer"
                    onChange={(event) => {
                      setValue(event.target.value);
                    }}
                    value={value}
                  >
                    {data[currentQuestion].answers.map((answer, index) => (
                      <FormControlLabel
                        key={index}
                        value={`${index}`}
                        control={<Radio color="primary" />}
                        label={answer.text}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </form>
            )}
          </CardActions>
          {!result && (
            <CardFooter>
              <hr />
              <Button
                onClick={() => {
                  handleChange(currentQuestion + 1);
                }}
                variant="contained"
                color="primary"
                className={'button'}
              >
                {currentQuestion === data.length - 1
                  ? 'Finalizar e Visualizar Resultado'
                  : 'Próxima Pergunta'}
              </Button>
              <Pagination
                page={currentQuestion + 1}
                color="primary"
                style={{ marginTop: 40 }}
                count={data.length}
                onChange={(event, value) => {
                  handleChange(value - 1);
                }}
              />
            </CardFooter>
          )}
        </Card>
      </Background>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const quiz = await quizRepository.getQuiz(id);
  if (!quiz) {
    console.log('Quiz não existe!!!');
    return {
      props: { data: {}, results: {} },
    };
  }

  let shuffledData = [...quiz.questions];
  shuffledData.map((question) => {
    let shuffledQuestion = { ...question };
    shuffledQuestion.answers = shuffledQuestion.answers.shuffle();
    return shuffledQuestion;
  });
  return {
    props: {
      data: shuffledData,
      color: quiz.color,
      results: quiz.results,
      title: quiz.title,
    },
  };
}

export default withTheme(Quiz);
