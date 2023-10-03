import { Info } from 'common/components';
import './Start.scss';

function Start() {
  return (
    <Info
      buttonText="Start"
      className="start-screen"
      onClick={() => console.log('Start game')}
    >
      <h1 className="start-screen__content">
        Who wants to be a millionaire?
      </h1>
    </Info>
  );
}

export default Start;
