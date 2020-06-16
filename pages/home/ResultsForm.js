import React from 'react';
import dynamic from 'next/dynamic';

import { DottedButton } from './styles';
import { CardTitle } from '../../components/styles';

const CKEditor = dynamic(() => import('../../components/CKEditor'), {
  ssr: false,
});

const ResultsForm = ({ resultsState: { results, setResults } }) => {
  const setResult = (result, index) => {
    const resultsCopy = [...results];
    resultsCopy[index] = result;
    setResults(resultsCopy);
  };

  return (
    <form>
      {results.map((result, index) => (
        <div
          className="col-12 py-4 my-4"
          style={{ backgroundColor: '#f2f2f2' }}
        >
          <CardTitle>
            Resultado {index + 1}
            <button
              type="button"
              className="btn btn-danger ml-2 mt-1 mb-1"
              style={{ float: 'right' }}
              onClick={(e) => {
                e.preventDefault();
                let resultsCopy = [...results];
                resultsCopy.splice(index, 1);
                setResults(resultsCopy);
              }}
            >
              <i className="fa fa-times" />
            </button>
          </CardTitle>
          <div className="form-row col-12 m-0 p-0">
            <div className="form-group col-6 p-0">
              <label htmlFor="from">Pontuação maior ou igual a:</label>
              <input
                onChange={(e) => {
                  const resultCopy = { ...result };
                  resultCopy.from = parseInt(e.target.value);
                  setResult(resultCopy, index);
                }}
                name="from"
                value={result.from}
                type="number"
                className="form-control"
              ></input>
            </div>
            <div className="form-group col-6 pl-3">
              <label htmlFor="to">menor que:</label>
              <input
                onChange={(e) => {
                  const resultCopy = { ...result };
                  resultCopy.to = parseInt(e.target.value);
                  setResult(resultCopy, index);
                }}
                value={result.to}
                name="to"
                type="number"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="form-row col-12 m-0 p-0">
            <CKEditor
              data={result.text}
              onChange={(event, editor) => {
                const data = editor.getData();
                const resultCopy = { ...result };
                resultCopy.text = data;
                setResult(resultCopy, index);
              }}
            />
          </div>
        </div>
      ))}
      <DottedButton
        className="btn col-12 text-left mt-3 mb-1"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          const resultsCopy = [...results];
          resultsCopy.push({ text: '', from: 0, to: 0 });
          setResults(resultsCopy);
        }}
      >
        <i className="fa fa-plus mr-2"></i>
        Adicionar Resultado
      </DottedButton>
    </form>
  );
};

export default ResultsForm;
