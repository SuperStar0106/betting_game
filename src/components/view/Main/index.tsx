import React from "react";
import { MainViewStyle } from "./index.style";
import { MineComponent } from "../../common";
import { TableView } from "../Table";

type MainViewProps = {};

export const MainView: React.FC<MainViewProps> = (props) => {
  return (
    <MainViewStyle>
      <TableView />
    </MainViewStyle>
  );
};
