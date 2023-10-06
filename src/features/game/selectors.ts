import { RootState } from 'store';

export const selectAppStatus = (state: RootState) => state.app.status;
export const selectCurrentQuestion = (state: RootState) => state
  .app
  .questions[state.app.currentQuestionIndex];
export const selectAllQuestions = (state: RootState) => state.app.questions;
export const selectCurrentQuestionIndex = (state: RootState) => state.app.currentQuestionIndex;
export const selectTotalScore = (state: RootState) => {
  if (state.app.currentQuestionIndex === 0) {
    return 0;
  }

  return state.app.questions[state.app.currentQuestionIndex - 1].value;
};
