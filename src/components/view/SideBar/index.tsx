import {
  SideBarViewStyle,
  InputLabel,
  BetAmount,
  ItemCount,
} from "./index.style";
import { InputComponent, ButtonComponent, SelectComponent } from "../../common";
import { TEXT } from "../../../consts";

export const SideBarView = () => {
  return (
    <SideBarViewStyle>
      <InputLabel>
        <label className="font-bg">{TEXT.LABEL.BET_AMOUNT}</label>
        <label className="font-sm">{TEXT.LABEL.BTC}0.00000384</label>
      </InputLabel>
      <BetAmount>
        <InputComponent />
        <div className="betAmountBtn">
          <ButtonComponent>½</ButtonComponent>
        </div>
        <div className="betAmountBtn btnRadius">
          <ButtonComponent>2×</ButtonComponent>
        </div>
      </BetAmount>
      <InputLabel>
        <label className="font-bg">{TEXT.LABEL.MINES}</label>
      </InputLabel>
      <BetAmount>
        <SelectComponent></SelectComponent>
      </BetAmount>
      <ItemCount>
        <div className="count-div font-bg">
          <label>{TEXT.LABEL.MINES}</label>
          <div>
            <InputComponent isInput={true} />
          </div>
        </div>
        <div className="count-div font-bg">
          <label>{TEXT.LABEL.GEMS}</label>
          <div>
            <InputComponent isInput={true} />
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
            <InputComponent isInput={true} />
          </div>
        </div>
      </ItemCount>
      <div className="pick-btn">
        <ButtonComponent isDisable={false}>{TEXT.LABEL.PICK}</ButtonComponent>
      </div>
      <div className="cash-out-btn">
        <ButtonComponent isDisable={false}>
          {TEXT.LABEL.CASHOUT}
        </ButtonComponent>
      </div>
    </SideBarViewStyle>
  );
};
