import { useState } from 'react';
import { QuestionStatus } from 'types';
import Menu from '../Menu/Menu';
import Question from '../Question/Question';
import { ReactComponent as MenuIcon } from './menu.svg';
import './Game.scss';
import MenuButton from '../MenuButton/MenuButton';

const menuItems = [{
  value: '$100,000',
  status: QuestionStatus.NOT_STARTED,
  id: '3',
}, {
  value: '$50,000',
  status: QuestionStatus.ACTIVE,
  id: '2',
},
{
  value: '$10,000',
  status: QuestionStatus.ANSWERED,
  id: '3',
}];

function Game() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="game">
      <MenuButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </MenuButton>
      <Question />
      <Menu
        menuItems={menuItems}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Game;
