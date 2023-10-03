import classnames from 'classnames';
import { CandyShape } from 'common/components';
import { QuestionStatus } from 'types';
import './MenuItem.scss';

interface MenuItemProps {
  value: string;
  status: QuestionStatus;
}

function MenuItem({ value, status }: MenuItemProps) {
  return (
    <CandyShape
      borderClass={classnames('menu-item__border', {
        'menu-item__border--active': status === QuestionStatus.ACTIVE,
      })}
      contentClass={classnames('menu-item__content', {
        'menu-item__content--active': status === QuestionStatus.ACTIVE,
        'menu-item__content--answered': status === QuestionStatus.ANSWERED,
      })}
    >
      {value}
    </CandyShape>
  );
}

export default MenuItem;
