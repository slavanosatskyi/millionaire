import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { AppStatus, Question } from 'types';
import questionsConfig from 'config.json';

interface AppState {
  status: AppStatus;
  currentQuestionIndex: number;
  questions: Question[];
}

const initialState: AppState = {
  status: AppStatus.NOT_STARTED,
  currentQuestionIndex: 0,
  questions: questionsConfig,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      if (action.payload === AppStatus.ACTIVE) {
        state.currentQuestionIndex = 0;
      }
      state.status = action.payload;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex === state.questions.length) {
        state.status = AppStatus.FINISHED;
      } else {
        state.currentQuestionIndex += 1;
      }
    },
  },
});

export const { setStatus, nextQuestion } = appSlice.actions;

export const selectAppStatus = (state: RootState) => state.app.status;
export const selectCurrentQuestion = (state: RootState) => state
  .app
  .questions[state.app.currentQuestionIndex];
export const selectAllQuestions = (state: RootState) => state.app.questions;
export const selectCurrentQuestionIndex = (state: RootState) => state.app.currentQuestionIndex;
export const selectTotalScore = (state: RootState) => (state.app.currentQuestionIndex === 0
  ? 0 : state.app.questions[state.app.currentQuestionIndex - 1].value);

export default appSlice.reducer;
