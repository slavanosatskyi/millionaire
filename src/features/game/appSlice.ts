import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStatus, Question } from 'types';

export interface AppState {
  status: AppStatus;
  currentQuestionIndex: number;
  questions: Question[];
}

const initialState: AppState = {
  status: AppStatus.NOT_STARTED,
  currentQuestionIndex: 0,
  questions: [],
};

export const APP_REDUCER_KEY = 'app';
export const appSlice = createSlice({
  name: APP_REDUCER_KEY,
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setStatus: (state, action: PayloadAction<AppStatus>) => {
      if (action.payload === AppStatus.ACTIVE) {
        state.currentQuestionIndex = 0;
      }
      state.status = action.payload;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
      if (state.currentQuestionIndex === state.questions.length) {
        state.status = AppStatus.FINISHED;
      }
    },
  },
});

export const { setStatus, nextQuestion, setQuestions } = appSlice.actions;

export default appSlice.reducer;
