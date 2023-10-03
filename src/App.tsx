import OptionStatus from 'types';
import Option from 'features/game/components/Option/Option';

function App() {
  return (
    <ol>
      <Option status={OptionStatus.INACTIVE} value="14" />
      <Option status={OptionStatus.WRONG} value="15" />
      <Option status={OptionStatus.CORRECT} value="16" />
      <Option status={OptionStatus.SELECTED} value="17" />
    </ol>
  );
}

export default App;
