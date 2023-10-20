import React, { useRef, useEffect } from "react";

import {
  ButtonComponentStyle,
  ButtonText,
  ButtonComponentStyleProps,
} from "./index.style";

type ButtonComponentProps = ButtonComponentStyleProps & {
  children: React.ReactNode;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  isDisable,
  children,
}) => {
  const buttonTextRef = useRef<HTMLButtonElement>(null);

  const handleMouseDown = () => {
    buttonTextRef.current?.classList.add("button-text-animation");
  };

  const handleMouseUp = () => {
    buttonTextRef.current?.classList.remove("button-text-animation");
  };

  useEffect(() => {
    console.log("button text class: ", buttonTextRef.current?.classList);
  }, [buttonTextRef]);

  return (
    <ButtonComponentStyle
      isDisable={isDisable}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <ButtonText ref={buttonTextRef}>{children}</ButtonText>
    </ButtonComponentStyle>
  );
};
