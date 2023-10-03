import { OptionStatus } from 'types';
import OptionsGrid from '../OptionsGrid/OptionsGrid';
import './Question.scss';

const question = {
  question: 'How old your elder brother was 10 years before you was born, mate?',
  answers: ['2'],
  options: [
    { id: '1', value: '13', status: OptionStatus.INACTIVE },
    { id: '2', value: '14', status: OptionStatus.INACTIVE },
    { id: '3', value: '15', status: OptionStatus.INACTIVE },
    { id: '4', value: '16', status: OptionStatus.INACTIVE }],
};

function Question() {
  return (
    <section className="question">
      <h1 className="question__text">{question.question}</h1>
      <OptionsGrid className="question__options" options={question.options} />
    </section>
  );
}

export default Question;
