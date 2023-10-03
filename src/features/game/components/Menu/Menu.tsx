import classNames from 'classnames';
import { MenuItem as MenuItemType } from 'types';
import MenuButton from '../MenuButton/MenuButton';
import MenuItem from '../MenuItem/MenuItem';
import { ReactComponent as CloseIcon } from './close.svg';
import './Menu.scss';

interface MenuProps {
  menuItems: MenuItemType[];
  isOpen: boolean;
  onClose: () => void;
}

function Menu({ menuItems, isOpen, onClose }: MenuProps) {
  return (
    <ul className={classNames('menu', {
      'menu--closed': !isOpen,
    })}
    >
      <MenuButton onClick={onClose}>
        <CloseIcon />
      </MenuButton>
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
