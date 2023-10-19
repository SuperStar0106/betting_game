import React, { useState } from "react";
import { InputWrapper, IconImage, StyledInput } from "./index.style";

type InputComponentProps = {
  isInput?: boolean;
};

export const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { isInput } = props;
  const [value, setValue] = useState<string>("0.00");
  const dollarImage = process.env.PUBLIC_URL + "dollar.png";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <InputWrapper>
      <StyledInput
        type={isInput ? "text" : "number"}
        value={value}
        onChange={handleInputChange}
        min="0"
        step="0.01"
        pattern="^\d+(?:\.\d{1,2})?$"
        isInput={isInput}
        disabled={isInput}
      />
      <IconImage src={dollarImage} alt="dollar" />
    </InputWrapper>
  );
};
