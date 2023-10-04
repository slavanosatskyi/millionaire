import { selectAppStatus } from 'appSlice';
import Game from 'features/game';
import Result from 'features/resultScreen';
import Start from 'features/startScreen';
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
