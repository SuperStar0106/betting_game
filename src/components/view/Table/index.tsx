import { MineComponent } from "../../common";
import { TableViewStyle } from "./index.style";

export const TableView = () => {
  const rows = 5;
  const cols = 5;

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        cells.push(
          <div key={`${i}-${j}`} className="cell">
            <MineComponent isBettingStart={false} isBomb={true} />
          </div>
        );
      }
    }
    return cells;
  };

  return <TableViewStyle className="table">{renderCells()}</TableViewStyle>;
};
