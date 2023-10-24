import { MineComponent } from "../../common";
import { TableViewStyle } from "./index.style";

type TableViewProps = {
  mines: Array<boolean>;
  isBettingStart: boolean;
  isBombExplosion: boolean;
  openCards: Array<number>;
  totalProfit: number;
  selectedNumbers: number[];
  isShowResult: boolean;
  setSelectedNumbers: (selectedNumber: number[]) => void;
  handleSetBombExplotion: () => void;
  handleAddOpenCards: (id: number) => void;
  setTotalProfit: (totalProfit: number) => void;
};

export const TableView = (props: TableViewProps) => {
  const {
    isBettingStart,
    isBombExplosion,
    mines,
    openCards,
    totalProfit,
    selectedNumbers,
    isShowResult,
    setSelectedNumbers,
    handleSetBombExplotion,
    handleAddOpenCards,
    setTotalProfit,
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
            setTotalProfit={setTotalProfit}
            totalProfit={totalProfit}
            cardId={i}
            setSelectedNumbers={setSelectedNumbers}
            selectedNumbers={selectedNumbers}
          />
        </div>
      );
    }
    return cells;
  };

  return <TableViewStyle className="table">{renderCells()}</TableViewStyle>;
};
