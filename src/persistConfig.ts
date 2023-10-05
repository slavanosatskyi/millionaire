import storageSession from 'redux-persist/lib/storage/session';

import { AppState, APP_REDUCER_KEY } from 'features/game/appSlice';
import { createTransform } from 'redux-persist';
import { AppStatus } from 'types';

const SetTransform = createTransform(
  (inboundState: AppState) => inboundState,
  (outboundState: AppState) => {
    const hasGameFinished = outboundState.status === AppStatus.FINISHED;
    return {
      ...outboundState,
      currentQuestionIndex: hasGameFinished ? 0 : outboundState.currentQuestionIndex,
      status: hasGameFinished ? AppStatus.NOT_STARTED : outboundState.status,
    };
  },
  { whitelist: [APP_REDUCER_KEY] },
);

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession,
  transforms: [SetTransform],
};

export default persistConfig;
