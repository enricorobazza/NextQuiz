import React, { useState } from 'react';
import {
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';

import { DottedButton } from './styles';

const QuestionForm = ({
  answersState: { answers, setAnswers },
  answerCountErrorState: { answerCountError, setAnswerCountError },
  questionState: { question, setQuestion },
}) => {
  return (
    <form>
      <div className="form-row col-12 p-0 m-0">
        <div className="form-group col-12 p-0">
          <label htmlFor="question">Pergunta:</label>
          <input
            className="form-control"
            placeholder="Qual dessas alternativas?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <hr />
        Respostas:
        <div className="form-group col-12 mt-2 p-0">
          {Boolean(answers) &&
            answers.map((answer, index) => (
              <div
                className="form-row col-12 d-flex"
                style={{ alignItems: 'center' }}
              >
                <input
                  className="form-control"
                  style={{ flex: 2 }}
                  value={answers[index].text}
                  type="text"
                  placeholder="Minha resposta"
                  onChange={(e) => {
                    const answersCopy =
                      answers === undefined ? [] : [...answers];
                    answersCopy[index].text = e.target.value;
                    setAnswers(answersCopy);
                  }}
                ></input>
                <label
                  className="ml-3 pt-1"
                  style={{ verticalAlign: 'middle' }}
                  htmlFor="value"
                >
                  Valor:
                </label>
                <input
                  name="value"
                  style={{ flex: 1 }}
                  className="form-control ml-2"
                  value={answers[index].value}
                  onChange={(e) => {
                    const answersCopy =
                      answers === undefined ? [] : [...answers];
                    answersCopy[index].value = parseInt(e.target.value);
                    setAnswers(answersCopy);
                  }}
                  type="number"
                  placeholder="Valor da resposta"
                ></input>
                <button
                  type="button"
                  className="btn btn-danger ml-2 mt-1 mb-1"
                  onClick={(e) => {
                    e.preventDefault();
                    let answersCopy = [...answers];
                    answersCopy.splice(index, 1);
                    setAnswers(answersCopy);
                  }}
                >
                  <i className="fa fa-times" />
                </button>
              </div>
            ))}
          <DottedButton
            className="btn col-12 text-left mt-3"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              const answersCopy = answers === undefined ? [] : [...answers];
              answersCopy.push({ text: '', value: 0 });
              setAnswers(answersCopy);
              setAnswerCountError(false);
            }}
          >
            <i className="fa fa-plus mr-2"></i>
            Adicionar Resposta
          </DottedButton>
        </div>
      </div>
      {answerCountError && (
        <div className="alert alert-danger" role="alert">
          A pergunta precisa ter ao menos uma resposta.
        </div>
      )}
    </form>
  );
};

export default QuestionForm;
