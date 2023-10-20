import { MineComponent } from "../../common";
import { TableViewStyle } from "./index.style";

type TableViewProps = {
  mines: Array<boolean>;
  isBettingStart: boolean;
};

export const TableView = (props: TableViewProps) => {
  const { isBettingStart, mines } = props;
  const rows = 5;
  const cols = 5;

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < rows * cols; i++) {
      cells.push(
        <div key={`${i}`} className="cell">
          <MineComponent isBettingStart={isBettingStart} isBomb={mines[i]} />
        </div>
      );
    }
    return cells;
  };

  return <TableViewStyle className="table">{renderCells()}</TableViewStyle>;
};
