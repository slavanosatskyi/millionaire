import Game from 'features/game';
import Result from 'features/resultScreen';
import Start from 'features/startScreen';
import { AppStatus } from 'types';

const APP_STATUS: AppStatus = AppStatus.NOT_STARTED;

function App() {
  switch (APP_STATUS) {
    case AppStatus.ACTIVE:
      return <Game />;
    case AppStatus.FINISHED:
      return <Result />;
    default:
      return <Start />;
  }
}

export default App;
