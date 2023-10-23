import React, { useState } from "react";
import { MainViewStyle } from "./index.style";
import { TableView } from "../Table";
import { SideBarView } from "../SideBar";
import { IMAGE } from "../../../consts";

type MainViewProps = {
  isStart: boolean;
  isBombExplosion: boolean;
  mines: Array<boolean>;
  openCards: Array<number>;
  handleStart: (bombCount: number) => void;
  handleSetBombExplotion: () => void;
  handleAddOpenCards: (id: number) => void;
  handleEnd: () => void;
  setIsStart: () => void;
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
    handleEnd,
    setIsStart,
  } = props;
  const [totalProfit, setTotalProfit] = useState<number>(0);
  const [totalResult, setTotalResult] = useState<number>(0);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const handleShowResult = (isShow: boolean, totalResult: number) => {
    setIsShowResult(isShow);
    setTotalResult(totalResult);
  };

  return (
    <MainViewStyle>
      <SideBarView
        handleStart={handleStart}
        isStart={isStart}
        totalProfit={totalProfit * 0.04}
        setSelectedNumbers={setSelectedNumbers}
        selectedNumbers={selectedNumbers}
        handleEnd={handleEnd}
        handleShowResult={handleShowResult}
        handleSetBombExplotion={handleSetBombExplotion}
        setIsStart={setIsStart}
      />
      <div className="table-div">
        <TableView
          isBettingStart={isStart}
          isBombExplosion={isBombExplosion}
          mines={mines}
          openCards={openCards}
          handleSetBombExplotion={handleSetBombExplotion}
          handleAddOpenCards={handleAddOpenCards}
          setTotalProfit={setTotalProfit}
          totalProfit={totalProfit}
          setSelectedNumbers={setSelectedNumbers}
          selectedNumbers={selectedNumbers}
          isShowResult={isShowResult}
        />
        {isShowResult && (
          <div className="betting-result">
            <span className="total-profit">{totalProfit * 0.04}×</span>
            <div className="middle-div"></div>
            <div className="total-result">
              <span>{totalResult.toFixed(2)} &nbsp;</span>
              <img src={IMAGE.DOLLAR} alt="dollar"></img>
            </div>
          </div>
        )}
      </div>
    </MainViewStyle>
  );
};
