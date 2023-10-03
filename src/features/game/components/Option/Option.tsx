import classnames from 'classnames';
import { CandyShape } from 'common/components';
import OptionStatus from 'types';
import './Option.scss';

interface OptionProps {
  status: OptionStatus;
  value: string;
}

function Option({ status, value }: OptionProps) {
  return (
    <CandyShape
      contentClass={classnames('option', {
        'option__content--inactive': status === OptionStatus.INACTIVE,
        'option__content--correct': status === OptionStatus.CORRECT,
        'option__content--wrong': status === OptionStatus.WRONG,
        'option__content--selected': status === OptionStatus.SELECTED,
      })}
      borderClass={classnames({
        'option__border--inactive': status === OptionStatus.INACTIVE,
        'option__border--correct': status === OptionStatus.CORRECT,
        'option__border--wrong': status === OptionStatus.WRONG,
        'option__border--selected': status === OptionStatus.SELECTED,
      })}
    >
      <p className="option__value">{value}</p>
    </CandyShape>
  );
}

export default Option;
