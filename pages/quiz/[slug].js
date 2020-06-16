import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import {
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
import { Button, CardFooter, CardActions, QuestionTitle } from './styles';

import { Background, Card, CardTitle } from '../../components/styles';

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

  if (!data || !results || !color || !title) {
    return <></>;
  }

  useEffect(() => {
    setValue(answers[currentQuestion] || -1);
  }, [currentQuestion]);

  const getFinalValue = (answers) => {
    let sum = 0;
    data.forEach((question, index) => {
      if (answers[index] && answers[index] >= 0) {
        sum += parseInt(question.answers[answers[index]].value);
      }
    });
    return sum;
  };

  const handleChange = async (to) => {
    let newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (to >= data.length) {
      const media = getFinalValue(newAnswers) / data.length;
      results.forEach((result) => {
        if (media >= parseInt(result.from) && media < parseInt(result.to))
          setResult(result.text);
      });
      return;
    }
    setCurrentQuestion(to);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
        <title>{`Next Quiz | ${title}`}</title>
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
            {!result && data && data.length > 0 && (
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
  const { slug } = context.query;

  const quiz = await quizRepository.searchQuizBySlug(slug);

  if (!quiz) {
    console.log('Quiz não existe!!!');
    context.res.statusCode = 302;
    context.res.setHeader('Location', '/');
    return { props: {} };
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
