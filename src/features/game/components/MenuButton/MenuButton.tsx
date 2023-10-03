import { PropsWithChildren } from 'react';
import './MenuButton.scss';

interface MenuButtonProps {
  onClick: () => void;
}

function MenuButton({ onClick, children }: PropsWithChildren<MenuButtonProps>) {
  return (
    <button
      onClick={onClick}
      className="menu-button"
      type="button"
    >
      {children}
    </button>
  );
}

export default MenuButton;
