import React from 'react'
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ right }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {right} ответа из {questions.length}</h2>
      <a href="/"><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percents = Math.round(step * 100 / questions.length);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percents}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title ? question.title : ''}</h1>
      <ul>
        {question.variants.map((obj, index) => <li onClick={() => onClickVariant(index)} key={index}>{obj}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [right, setRight] = React.useState(0);
  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setRight(right + 1)
    }
  }


  return (
    <div className="App">
      {step == questions.length ? (<Result right={right} />) : (<Game question={question} onClickVariant={onClickVariant} step={step} />)
      }
    </div>
  );
}

export default App;