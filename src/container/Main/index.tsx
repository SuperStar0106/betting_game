import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MainView } from "../../components/view";
import { AppDispatch, AppActions, RootState } from "../../redux/store";

export const MainContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isStart, mines } = useSelector((state: RootState) => state.game);

  const handleStart = (bombCount: number) => {
    dispatch(AppActions.game.setTableValues({ bombCount }));
  };

  return <MainView isStart={isStart} handleStart={handleStart} mines={mines} />;
};
