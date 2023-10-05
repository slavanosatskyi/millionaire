import { Game, Result, Start } from 'features/game';
import { selectAppStatus } from 'features/game/selectors';
import { useSelector } from 'react-redux';
import { AppStatus } from 'types';

function App() {
  const status = useSelector(selectAppStatus);

  switch (status) {
    case AppStatus.ACTIVE:
      return <Game />;
    case AppStatus.FINISHED:
      return <Result />;
    default:
      return <Start />;
  }
}

export default App;
