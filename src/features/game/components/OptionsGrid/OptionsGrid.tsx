import classnames from 'classnames';
import { Option as OptionType } from 'types';
import Option from '../Option/Option';
import './OptionsGrid.scss';

interface OptionsGridProps {
  options: OptionType[];
  className?: string;
}

function OptionsGrid({ options, className }: OptionsGridProps) {
  return (
    <ol className={classnames('options-grid', className)}>
      {options.map(({ id, value, status }) => (
        <Option
          key={id}
          value={value}
          status={status}
          onClick={() => console.log('click on option', value)}
        />
      ))}
    </ol>
  );
}

export default OptionsGrid;
