import styled from "styled-components";
import { CustomTheme } from "../../../styles/type";

export type ButtonComponentStyleProps = {
  isDisable?: boolean;
};

export const ButtonComponentStyle = styled.button<ButtonComponentStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: ${(props) => (props.isDisable ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isDisable ? 0.5 : 1)};
  background-color: ${(props) => (props.theme as CustomTheme).colors.primary60};
  border: none;
  transition-duration: 0.2s;
  padding: 0.625rem;

  &:hover {
    background-color: ${(props) => (props.theme as CustomTheme).colors.btnClickBackColor};
  }
`;

export const ButtonText = styled.span`
  color: ${(props) => (props.theme as CustomTheme).colors.white};
  font-size: ${(props) => (props.theme as CustomTheme).fontSizes.bg};
  transition-duration: 0.2s;

  &.button-text-animation {
    transform: scale(0.8);
  }
`;
