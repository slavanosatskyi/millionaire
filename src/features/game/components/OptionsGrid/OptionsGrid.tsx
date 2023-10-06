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
            if (playerAnswers.length === answers.length) {
              return;
            }

            const updatedPlayerAnswers = playerAnswers.includes(id)
              ? playerAnswers.filter((playerAnswerId) => playerAnswerId !== id)
              : [...playerAnswers, id];
            if (updatedPlayerAnswers.length <= answers.length) {
              setAnswers(updatedPlayerAnswers);
            }

            if (updatedPlayerAnswers.length === answers.length) {
              // let user see correct answer for a second
              // only after that move to the next question
              // or finish the game
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
