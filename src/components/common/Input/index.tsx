import React, { useEffect } from "react";
import { InputWrapper, IconImage, StyledInput } from "./index.style";

type InputComponentProps = {
  isInput: boolean;
  image: string;
  inputValue: number;
  setInputValue: (inputValue: number) => void;
  setBtcAmount?: (btcAmount: number) => void;
};

export const InputComponent: React.FC<Partial<InputComponentProps>> = (
  props
) => {
  const { isInput, image, inputValue, setBtcAmount, setInputValue } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue && setInputValue(Number(event.target.value));
    if (event.target && event.target.value && setBtcAmount) {
      const inputValue = event.target.value;
      const calculatedValue = Number(inputValue) * 0.000048;
      const formattedValue = Number(calculatedValue.toFixed(8));
      setBtcAmount(formattedValue);
    }
  };

  useEffect(() => {
    const calculatedValue = Number(inputValue) * 0.000048;
    const formattedValue = Number(calculatedValue.toFixed(8));
    setBtcAmount && setBtcAmount(formattedValue);
  }, [inputValue]);

  return (
    <InputWrapper>
      <StyledInput
        type="number"
        defaultValue="0.00"
        value={inputValue?.toFixed(2)}
        onChange={handleInputChange}
        min="0"
        step="0.01"
        pattern="[0-9]*(\.[0-9]{0,2})?"
        inputMode="decimal"
        isInput={isInput}
        disabled={isInput}
      />
      <IconImage src={image} alt="dollar" />
    </InputWrapper>
  );
};
