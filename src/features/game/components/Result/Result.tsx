import { setStatus } from 'features/game/appSlice';
import { selectTotalScore } from 'features/game/selectors';
import { Info } from 'common/components';
import { useDispatch, useSelector } from 'react-redux';
import { AppStatus } from 'types';
import toUSDollar from 'utils/format';

import './Result.scss';

function Result() {
  const totalScore = useSelector(selectTotalScore);
  const dispatch = useDispatch();

  return (
    <Info
      buttonText="Try again"
      onClick={() => dispatch(setStatus(AppStatus.ACTIVE))}
    >
      <p className="final-screen__total-score">Total score:</p>
      <h1 className="final-screen__earned">
        {toUSDollar(totalScore)}
        {' '}
        earned
      </h1>
    </Info>
  );
}

export default Result;
