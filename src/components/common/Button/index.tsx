import React, { useRef, useEffect } from "react";

import {
  ButtonComponentStyle,
  ButtonText,
  ButtonComponentStyleProps,
} from "./index.style";

type ButtonComponentProps = ButtonComponentStyleProps & {
  children: React.ReactNode;
  type: string;
  isDisable?: boolean;
  onClick: () => void;
};

export const ButtonComponent: React.FC<Partial<ButtonComponentProps>> = ({
  children,
  ...props
}) => {
  const buttonTextRef = useRef<HTMLButtonElement>(null);
  const { isDisable, onClick, type } = { ...props };

  const handleMouseDown = () => {
    buttonTextRef.current?.classList.add("button-text-animation");
  };

  const handleMouseUp = () => {
    buttonTextRef.current?.classList.remove("button-text-animation");
  };

  return (
    <ButtonComponentStyle
      isDisable={isDisable}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      type={type}
    >
      <ButtonText ref={buttonTextRef} type={type}>
        {children}
      </ButtonText>
    </ButtonComponentStyle>
  );
};
