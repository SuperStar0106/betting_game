import { MineComponent } from "../../common";
import { TableViewStyle } from "./index.style";

type TableViewProps = {
  mines: Array<boolean>;
  isBettingStart: boolean;
  isBombExplosion: boolean;
  openCards: Array<number>;
  handleSetBombExplotion: () => void;
  handleAddOpenCards: (id: number) => void;
};

export const TableView = (props: TableViewProps) => {
  const {
    isBettingStart,
    isBombExplosion,
    mines,
    openCards,
    handleSetBombExplotion,
    handleAddOpenCards,
  } = props;
  const rows = 5;
  const cols = 5;

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < rows * cols; i++) {
      cells.push(
        <div key={`${i}`} className="cell">
          <MineComponent
            isBettingStart={isBettingStart}
            isBombExplosion={isBombExplosion}
            isBomb={mines[i]}
            openCards={openCards}
            handleSetBombExplotion={handleSetBombExplotion}
            handleAddOpenCards={handleAddOpenCards}
            cardId={i}
          />
        </div>
      );
    }
    return cells;
  };

  return <TableViewStyle className="table">{renderCells()}</TableViewStyle>;
};
