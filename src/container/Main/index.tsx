import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MainView } from "../../components/view";
import { AppDispatch, AppActions, RootState } from "../../redux/store";

export const MainContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isStart, mines, isBombExplosion, openCards } = useSelector(
    (state: RootState) => state.game
  );

  const handleStart = (bombCount: number) => {
    dispatch(AppActions.game.setTableValues({ bombCount }));
  };

  const handleAddOpenCards = (id: number) => {
    dispatch(AppActions.game.addOpenCards({ id }));
  };

  const handleSetBombExplotion = () => {
    dispatch(AppActions.game.setBombExplostion());
  };

  return (
    <MainView
      isStart={isStart}
      isBombExplosion={isBombExplosion}
      handleStart={handleStart}
      handleAddOpenCards={handleAddOpenCards}
      handleSetBombExplotion={handleSetBombExplotion}
      mines={mines}
      openCards={openCards}
    />
  );
};
