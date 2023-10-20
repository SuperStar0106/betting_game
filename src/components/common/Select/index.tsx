import React from "react";
import { SelectComponentStyle } from "./index.style";

type SelectComponentProps = {};

export const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const options = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <SelectComponentStyle defaultValue="3">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectComponentStyle>
  );
};
