import classnames from 'classnames';
import { CandyShape } from 'common/components';
import { memo } from 'react';
import { MenuItemStatus } from 'types';
import toUSDollar from 'utils/format';
import './MenuItem.scss';

interface MenuItemProps {
  value: number;
  status: MenuItemStatus;
}

function MenuItem({ value, status }: MenuItemProps) {
  return (
    <CandyShape
      borderClass={classnames('menu-item__border', {
        'menu-item__border--active': status === MenuItemStatus.ACTIVE,
      })}
      contentClass={classnames('menu-item__content', {
        'menu-item__content--active': status === MenuItemStatus.ACTIVE,
        'menu-item__content--answered': status === MenuItemStatus.ANSWERED,
      })}
    >
      {toUSDollar(value)}
    </CandyShape>
  );
}

export default memo(MenuItem);
