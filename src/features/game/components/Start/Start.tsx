import { setStatus } from 'features/game/appSlice';
import { Info } from 'common/components';
import { useDispatch } from 'react-redux';
import { AppStatus } from 'types';
import './Start.scss';

function Start() {
  const dispatch = useDispatch();

  return (
    <Info
      buttonText="Start"
      className="start-screen"
      onClick={() => dispatch(setStatus(AppStatus.ACTIVE))}
    >
      <h1 className="start-screen__content">
        Who wants to be a millionaire?
      </h1>
    </Info>
  );
}

export default Start;
