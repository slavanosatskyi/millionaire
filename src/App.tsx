import MenuItem from 'features/game/components/MenuItem/MenuItem';
import { QuestionStatus } from 'types';

function App() {
  return (
    <>
      <MenuItem value="$100,000" status={QuestionStatus.NOT_STARTED} />
      <MenuItem value="$50,000" status={QuestionStatus.ACTIVE} />
      <MenuItem value="$10,000" status={QuestionStatus.ANSWERED} />
    </>
  );
}

export default App;
