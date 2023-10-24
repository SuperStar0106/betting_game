import styled from "styled-components";

type TableViewStyleProps = {};

export const TableViewStyle = styled.div<TableViewStyleProps>`
  &.table {
    display: grid;
    user-select: none;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.7rem;
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 112px;
  }
`;