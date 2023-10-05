import classnames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppStatus, Option as OptionType } from 'types';
import { nextQuestion, setStatus } from 'features/game/appSlice';
import Option from '../Option/Option';
import getOptionStatus from './OptionsGrid.utils';
import './OptionsGrid.scss';

interface OptionsGridProps {
  options: OptionType[];
  answers: string[];
  className?: string;
}

function OptionsGrid({ options, answers, className }: OptionsGridProps) {
  const [playerAnswers, setAnswers] = useState<string[]>([]);
  const dispatch = useDispatch();

  return (
    <ol className={classnames('options-grid', className)}>
      {options.map(({ id, value }) => (
        <Option
          key={id}
          value={value}
          status={getOptionStatus(id, answers, playerAnswers)}
          onClick={() => {
            const updatedPlayerAnswers = [...playerAnswers, id];
            if (updatedPlayerAnswers.length <= answers.length) {
              setAnswers([...playerAnswers, id]);
            }

            if (updatedPlayerAnswers.length === answers.length) {
              setTimeout(() => {
                if (updatedPlayerAnswers.every((answerId) => answers.includes(answerId))) {
                  dispatch(nextQuestion());
                } else {
                  dispatch(setStatus(AppStatus.FINISHED));
                }
              }, 1000);
            }
          }}
        />
      ))}
    </ol>
  );
}

export default OptionsGrid;
