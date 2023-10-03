import classNames from 'classnames';
import { MenuItem as MenuItemType } from 'types';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';

interface MenuProps {
  menuItems: MenuItemType[];
  isOpen: boolean;
}

function Menu({ menuItems, isOpen }: MenuProps) {
  return (
    <ul className={classNames('menu', {
      'menu--closed': !isOpen,
    })}
    >
      {menuItems.map(({ id, status, value }) => (
        <li key={id} className="menu__item">
          <MenuItem
            status={status}
            value={value}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
