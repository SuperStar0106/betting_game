import { useState } from "react";
import {
  SideBarViewStyle,
  InputLabel,
  BetAmount,
  ItemCount,
} from "./index.style";
import { InputComponent, ButtonComponent, SelectComponent } from "../../common";
import { TEXT, IMAGE } from "../../../consts";

export const SideBarView = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  return (
    <SideBarViewStyle>
      <InputLabel>
        <label className="font-bg">{TEXT.LABEL.BET_AMOUNT}</label>
        <label className="font-sm">{TEXT.LABEL.BTC}0.00000384</label>
      </InputLabel>
      <BetAmount>
        <InputComponent image={IMAGE.DOLLAR} />
        <div className="betAmountBtn">
          <ButtonComponent>½</ButtonComponent>
        </div>
        <div className="betAmountBtn btnRadius">
          <ButtonComponent>2×</ButtonComponent>
        </div>
      </BetAmount>

      {!isStart && (
        <div>
          <InputLabel>
            <label className="font-bg">{TEXT.LABEL.MINES}</label>
          </InputLabel>
          <BetAmount>
            <SelectComponent></SelectComponent>
          </BetAmount>
        </div>
      )}

      {isStart && (
        <div>
          <ItemCount>
            <div className="count-div font-bg">
              <label>{TEXT.LABEL.MINES}</label>
              <div>
                <InputComponent isInput={true} image={IMAGE.DISABLED_BOMB} />
              </div>
            </div>
            <div className="count-div font-bg">
              <label>{TEXT.LABEL.GEMS}</label>
              <div>
                <InputComponent isInput={true} image={IMAGE.DISABLED_JEWEL} />
              </div>
            </div>
          </ItemCount>
          <InputLabel>
            <label className="font-bg">{TEXT.LABEL.TOTAL_PROFIT}</label>
            <label className="font-sm">{TEXT.LABEL.BTC}0.00000384</label>
          </InputLabel>
          <ItemCount>
            <div className="count-div font-bg">
              <div>
                <InputComponent isInput={true} image={IMAGE.DOLLAR} />
              </div>
            </div>
          </ItemCount>
          <div className="pick-btn">
            <ButtonComponent isDisable={false}>
              {TEXT.LABEL.PICK}
            </ButtonComponent>
          </div>
        </div>
      )}

      <div className="cash-out-btn">
        <ButtonComponent
          type="cash_out"
          isDisable={false}
          onClick={() => setIsStart(true)}
        >
          {isStart ? TEXT.LABEL.CASHOUT : TEXT.LABEL.BET}
        </ButtonComponent>
      </div>
    </SideBarViewStyle>
  );
};
