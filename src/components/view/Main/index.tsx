import React from "react";
import { MainViewStyle } from "./index.style";
import { TableView } from "../Table";
import { SideBarView } from "../SideBar";

type MainViewProps = {
  isStart: boolean;
  isBombExplosion: boolean;
  mines: Array<boolean>;
  openCards: Array<number>;
  handleStart: (bombCount: number) => void;
  handleSetBombExplotion: () => void;
  handleAddOpenCards: (id: number) => void;
};

export const MainView: React.FC<MainViewProps> = (props) => {
  const {
    isStart,
    mines,
    isBombExplosion,
    openCards,
    handleStart,
    handleSetBombExplotion,
    handleAddOpenCards,
  } = props;

  return (
    <MainViewStyle>
      <SideBarView handleStart={handleStart} isStart={isStart} />
      <div className="table-div">
        <TableView
          isBettingStart={isStart}
          isBombExplosion={isBombExplosion}
          mines={mines}
          openCards={openCards}
          handleSetBombExplotion={handleSetBombExplotion}
          handleAddOpenCards={handleAddOpenCards}
        />
      </div>
    </MainViewStyle>
  );
};
