import { selectCurrentQuestion } from 'features/game/selectors';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import OptionsGrid from '../OptionsGrid/OptionsGrid';
import './Question.scss';

function Question() {
  const currentQuestion = useSelector(selectCurrentQuestion);
  if (!currentQuestion) {
    return null;
  }

  const {
    id, question, options, answers,
  } = currentQuestion;

  return (
    <section className="question">
      <h1 className="question__text">{question}</h1>
      <OptionsGrid
        key={id}
        className="question__options"
        options={options}
        answers={answers}
      />
    </section>
  );
}

export default memo(Question);
