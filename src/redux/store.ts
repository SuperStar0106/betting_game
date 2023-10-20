import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameReducer, gameActions } from "./slices";

const reducer = combineReducers({
  game: gameReducer,
});

export const store = configureStore({
  reducer,
});

export const AppActions = {
  game: gameActions,
};

export * as AppActionTypes from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
