import React, { useState } from 'react';
import { BlockPicker } from 'react-color';

const QuizForm = ({
  colorState,
  questionCountState,
  slugState,
  titleState,
}) => {
  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="form-row col-12 p-0">
        <div className="form-group col-12">
          <label htmlFor="slug">Slug:</label>
          <input
            value={slugState.slug}
            placeholder="meu-questionario"
            name="slug"
            className="form-control"
            onChange={(e) => {
              const slug = e.target.value
                .replace(' ', '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase();
              console.log(slug);
              slugState.setSlug(slug);
            }}
          ></input>
          <div className="alert alert-secondary mt-2" role="alert">
            Um identificador único pro seu questionário. Não pode conter acentos
            ou espaços.
          </div>
        </div>
      </div>
      <div className="form-row col-12 p-0">
        <div className="form-group col-12">
          <label htmlFor="title">Título:</label>
          <input
            value={titleState.title}
            placeholder="Qual será sua idade?"
            name="title"
            className="form-control"
            onChange={(e) => titleState.setTitle(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="form-row col-12 p-0">
        <div className="form-group col-12">
          <label htmlFor="count">Quantidade de perguntas:</label>
          <input
            value={questionCountState.questionCount}
            onChange={(e) =>
              questionCountState.setQuestionCount(e.target.value)
            }
            name="count"
            type="number"
            className="form-control"
          ></input>
        </div>
      </div>
      <div className="form-row col-12 p-0">
        <div className="form-group col-12" style={{ minHeight: 270 }}>
          <label htmlFor="color">Cor de Fundo:</label>
          <BlockPicker
            className="mt-2"
            color={colorState.color}
            onChangeComplete={(color) => {
              colorState.setColor(color.hex);
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default QuizForm;
