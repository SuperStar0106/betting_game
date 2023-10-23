import { useEffect, useRef, useState } from "react";
import {
  SideBarViewStyle,
  InputLabel,
  BetAmount,
  ItemCount,
} from "./index.style";
import { InputComponent, ButtonComponent, SelectComponent } from "../../common";
import { TEXT, IMAGE } from "../../../consts";

type SideBarViewProps = {
  handleStart: (bombCount: number) => void;
  isStart: boolean;
  totalProfit: number;
  selectedNumbers: number[];
  setSelectedNumbers: (selectedNumbers: number[]) => void;
  handleEnd: () => void;
  handleShowResult: (isShow: boolean, totalResult: number) => void;
  setIsStart: () => void;
  handleSetBombExplotion: () => void;
};

export const SideBarView = (props: SideBarViewProps) => {
  const {
    handleStart,
    isStart,
    totalProfit,
    setSelectedNumbers,
    selectedNumbers,
    handleEnd,
    handleShowResult,
    setIsStart,
    handleSetBombExplotion,
  } = props;
  const [mineCount, setMineCount] = useState<number>(3);
  const [btcAmount, setBtcAmount] = useState<number>(0);
  const [totalBtcAmount, setTotalBtcAmount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);

  const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    while (selectedNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 25);
    }
    setSelectedNumbers([...selectedNumbers, randomNumber]);
  };

  const handleDoubleClick = () => {
    setInputValue(inputValue * 2);
  };

  const handleHalfClick = () => {
    setInputValue(inputValue * 0.5);
  };

  const handleClickCashOut = () => {
    handleShowResult(true, totalBtcAmount);
    handleSetBombExplotion();
    setIsStart();
  };

  const handleClickBet = () => {
    handleEnd();
    handleStart(mineCount);
    handleShowResult(false, totalBtcAmount);
    setSelectedNumbers([]);
  };

  useEffect(() => {
    setTotalBtcAmount(totalProfit * btcAmount);
    console.log("totalProfit: ", totalProfit);
    console.log("btcAmount: ", btcAmount);
  }, [btcAmount, totalProfit]);

  return (
    <SideBarViewStyle>
      <InputLabel>
        <label className="font-bg">{TEXT.LABEL.BET_AMOUNT}</label>
        <label className="font-sm">
          {TEXT.LABEL.BTC + " " + btcAmount.toFixed(8)}
        </label>
      </InputLabel>
      <BetAmount>
        <InputComponent
          image={IMAGE.DOLLAR}
          setBtcAmount={setBtcAmount}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div className="betAmountBtn" onClick={handleHalfClick}>
          <ButtonComponent>½</ButtonComponent>
        </div>
        <div className="betAmountBtn btnRadius" onClick={handleDoubleClick}>
          <ButtonComponent>2×</ButtonComponent>
        </div>
      </BetAmount>

      {!isStart && (
        <div>
          <InputLabel>
            <label className="font-bg">{TEXT.LABEL.MINES}</label>
          </InputLabel>
          <BetAmount>
            <SelectComponent onChange={setMineCount} />
          </BetAmount>
        </div>
      )}

      {isStart && (
        <div>
          <ItemCount>
            <div className="count-div font-bg">
              <label>{TEXT.LABEL.MINES}</label>
              <div>
                <InputComponent
                  isInput={true}
                  image={IMAGE.DISABLED_BOMB}
                  inputValue={mineCount}
                />
              </div>
            </div>
            <div className="count-div font-bg">
              <label>{TEXT.LABEL.GEMS}</label>
              <div>
                <InputComponent
                  isInput={true}
                  image={IMAGE.DISABLED_JEWEL}
                  inputValue={25 - mineCount}
                />
              </div>
            </div>
          </ItemCount>
          <InputLabel>
            <label className="font-bg">
              {TEXT.LABEL.TOTAL_PROFIT + " (" + totalProfit + "×)"}
            </label>
            <label className="font-sm">
              {TEXT.LABEL.BTC + " " + totalBtcAmount.toFixed(8)}
            </label>
          </InputLabel>
          <ItemCount>
            <div className="count-div font-bg">
              <div>
                <InputComponent isInput={true} image={IMAGE.DOLLAR} />
              </div>
            </div>
          </ItemCount>
          <div className="pick-btn">
            <ButtonComponent isDisable={false} onClick={generateRandomNumber}>
              {TEXT.LABEL.PICK}
            </ButtonComponent>
          </div>
        </div>
      )}

      <div className="cash-out-btn">
        <ButtonComponent
          type="cash_out"
          isDisable={isStart && selectedNumbers.length === 0}
          onClick={!isStart ? handleClickBet : handleClickCashOut}
        >
          {isStart ? TEXT.LABEL.CASHOUT : TEXT.LABEL.BET}
        </ButtonComponent>
      </div>
    </SideBarViewStyle>
  );
};
