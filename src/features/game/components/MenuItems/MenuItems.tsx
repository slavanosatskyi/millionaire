import { selectCurrentQuestionIndex } from 'features/game/selectors';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { MenuItem as MenuItemType } from 'types';
import MenuItem from '../MenuItem/MenuItem';
import getMenuItemStatus from './MenuItems.utils';

import './MenuItems.scss';

interface MenuItemProps {
  menuItems: MenuItemType[];
}

function MenuItems({ menuItems }: MenuItemProps) {
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);

  return (
    <>
      {menuItems.map(({ id, value }, index) => (
        <li key={id} className="menu-item">
          <MenuItem
            status={getMenuItemStatus(currentQuestionIndex, index)}
            value={value}
          />
        </li>
      ))}
    </>
  );
}

export default memo(MenuItems);
