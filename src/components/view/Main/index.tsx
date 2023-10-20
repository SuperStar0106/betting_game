import React from "react";
import { MainViewStyle } from "./index.style";
import { TableView } from "../Table";
import { SideBarView } from "../SideBar";

type MainViewProps = {
  isStart: boolean;
  mines: Array<boolean>;
  handleStart: (bombCount: number) => void;
};

export const MainView: React.FC<MainViewProps> = (props) => {
  const { isStart, mines, handleStart } = props;

  return (
    <MainViewStyle>
      <SideBarView handleStart={handleStart} isStart={isStart} />
      <div className="table-div">
        <TableView isBettingStart={isStart} mines={mines} />
      </div>
    </MainViewStyle>
  );
};
