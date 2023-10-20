import React from "react";
import { SelectComponentStyle } from "./index.style";

type SelectComponentProps = {
  onChange: (bombCount: number) => void;
};

export const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const options = Array.from({ length: 24 }, (_, index) => index + 1);
  const { onChange } = props;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    onChange(selectedValue);
  };

  return (
    <SelectComponentStyle defaultValue="3" onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectComponentStyle>
  );
};
