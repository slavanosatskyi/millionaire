import Menu from 'features/game/components/Menu/Menu';
import { QuestionStatus } from 'types';

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

function App() {
  return (
    <Menu menuItems={menuItems} isOpen={false} />
  );
}

export default App;
