import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";
import { GameUtil } from "../../utils";

type gameState = {
  isStart: boolean;
  mines: Array<boolean>;
  openCards: Array<number>;
  isBombExplosion: boolean;
};

const initialState: gameState = {
  isStart: false,
  mines: [],
  openCards: [],
  isBombExplosion: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setTableValues(state: gameState, action: PayloadAction<AppActionTypes.Game.ISetTableValuesAction>) {
      state.isStart = true;
      const mines = GameUtil.makebombArray(action.payload.bombCount);
      state.mines = [...mines];
    },
    addOpenCards(state: gameState, action: PayloadAction<AppActionTypes.Game.IAddOpenCardsAction>) {
      const id = action.payload.id;
      if (!state.openCards.includes(id)) {
        state.openCards.push(id);
      }
    },
    setBombExplostion(state: gameState) {
      state.isBombExplosion = true;
    },
  },
});

export const actions = gameSlice.actions;
export const reducer = gameSlice.reducer;
