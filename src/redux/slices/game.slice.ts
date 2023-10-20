import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";
import { GameUtil } from "../../utils";

type gameState = {
  isStart: boolean;
  mines: Array<boolean>;
};

const initialState: gameState = {
  isStart: false,
  mines: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setTableValues(state: gameState, action: PayloadAction<AppActionTypes.Game.ISetTableValuesAction>) {
      state.isStart = true;
      const mines = GameUtil.makebombArray(action.payload.bombCount);
      state.mines = { ...mines };
    },
  },
});

export const actions = gameSlice.actions;
export const reducer = gameSlice.reducer;
