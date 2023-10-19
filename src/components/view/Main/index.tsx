import React from "react";
import { MainViewStyle } from "./index.style";
import { TableView } from "../Table";
import { SideBarView } from "../SideBar";

type MainViewProps = {};

export const MainView: React.FC<MainViewProps> = (props) => {
  return (
    <MainViewStyle>
      <SideBarView />
      <TableView />
    </MainViewStyle>
  );
};
