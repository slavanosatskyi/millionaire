import { RootState } from 'store';

export const selectAppStatus = (state: RootState) => state.app.status;
export const selectCurrentQuestion = (state: RootState) => state
  .app
  .questions[state.app.currentQuestionIndex];
export const selectAllQuestions = (state: RootState) => state.app.questions;
export const selectCurrentQuestionIndex = (state: RootState) => state.app.currentQuestionIndex;
export const selectTotalScore = (state: RootState) => (state.app.currentQuestionIndex === 0
  ? 0 : state.app.questions[state.app.currentQuestionIndex - 1].value);
