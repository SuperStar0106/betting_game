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
  return (
    <ButtonComponentStyle isDisable>
      <ButtonText>{children}</ButtonText>
    </ButtonComponentStyle>
  );
};
