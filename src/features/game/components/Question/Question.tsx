import { selectCurrentQuestion } from 'appSlice';
import { useSelector } from 'react-redux';
import OptionsGrid from '../OptionsGrid/OptionsGrid';
import './Question.scss';

function Question() {
  const {
    id, question, options, answers,
  } = useSelector(selectCurrentQuestion);
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

export default Question;
