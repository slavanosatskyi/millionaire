import { selectCurrentQuestionIndex } from 'appSlice';
import classnames from 'classnames';
import { CandyShape } from 'common/components';
import { useSelector } from 'react-redux';
import toUSDollar from 'utils/format';
import './MenuItem.scss';

interface MenuItemProps {
  value: number;
  index: number;
}

function MenuItem({ value, index }: MenuItemProps) {
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);

  return (
    <CandyShape
      borderClass={classnames('menu-item__border', {
        'menu-item__border--active': index === currentQuestionIndex,
      })}
      contentClass={classnames('menu-item__content', {
        'menu-item__content--active': index === currentQuestionIndex,
        'menu-item__content--answered': currentQuestionIndex > index,
      })}
    >
      {toUSDollar(value)}
    </CandyShape>
  );
}

export default MenuItem;
