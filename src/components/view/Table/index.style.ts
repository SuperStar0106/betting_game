import styled from "styled-components";

type TableViewStyleProps = {};

export const TableViewStyle = styled.div<TableViewStyleProps>`
  &.table {
    display: grid;
    width: calc(100% - 298px);
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0;
  }

  &.cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;