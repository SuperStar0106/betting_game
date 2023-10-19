import React from "react";
import { MainViewStyle } from "./index.style";
import { MineComponent } from "../../common";

type MainViewProps = {};

export const MainView: React.FC<MainViewProps> = (props) => {
  return (
    <MainViewStyle>
      <MineComponent isBettingStart={true} />
    </MainViewStyle>
  );
};
