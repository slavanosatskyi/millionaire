import classNames from 'classnames';
import { MenuItem as MenuItemType } from 'types';
import MenuButton from '../MenuButton/MenuButton';
import MenuItems from '../MenuItems/MenuItems';
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
      <MenuItems menuItems={menuItems} />
    </ul>
  );
}

export default Menu;
