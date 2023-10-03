import { Info } from './common/components';

import './App.scss';

function App() {
  return (
    // <div className="App">
    //   <h1>Millionaire</h1>
    //   <Button text="Test button" />
    //   <CandyShape contentClass="option content--inactive" borderClass="border--inactive">
    //     Inactive
    //   </CandyShape>
    //   <CandyShape contentClass="option content--correct" borderClass="border--correct">
    //     Correct
    //   </CandyShape>
    //   <CandyShape contentClass="option content--wrong" borderClass="border--wrong">
    //     Wrong
    //   </CandyShape>
    //   <CandyShape contentClass="option content--selected" borderClass="border--selected">
    //     Selected
    //   </CandyShape>
    // </div>
    <Info buttonText="Start" className="start-screen"><h1>Who wants to be a millionaire?</h1></Info>

  );
}

export default App;
