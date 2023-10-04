import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllQuestions } from 'appSlice';
import Menu from '../Menu/Menu';
import Question from '../Question/Question';
import { ReactComponent as MenuIcon } from './menu.svg';
import './Game.scss';
import MenuButton from '../MenuButton/MenuButton';

function Game() {
  const [isOpen, setOpen] = useState(false);
  const questions = useSelector(selectAllQuestions);

  const menuItems = useMemo(
    () => questions.map(({ id, value }) => ({
      id, value,
    })),
    [questions],
  );

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
