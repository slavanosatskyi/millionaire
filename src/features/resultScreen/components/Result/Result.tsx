import { Info } from 'common/components';

import './Result.scss';

function Result() {
  return (
    <Info
      buttonText="Try again"
      onClick={() => console.log('Try again')}
    >
      <p className="final-screen__total-score">Total score:</p>
      <h1 className="final-screen__earned">$8,000 earned</h1>
    </Info>
  );
}

export default Result;
