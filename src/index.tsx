import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'App';
import questions from 'config.json';
import { setQuestions } from 'features/game/appSlice';
import validateQuestions from 'utils/validation';

import 'index.scss';

function main() {
  const errors = validateQuestions(questions);
  let content;
  if (errors.length) {
    content = (
      <>
        <h1>Errors in config!</h1>
        <ul>
          {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
      </>
    );
  } else {
    store.dispatch(setQuestions(questions));
    content = (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );

  root.render(<React.StrictMode>{content}</React.StrictMode>);
}

main();
