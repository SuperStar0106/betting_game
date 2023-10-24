import styled from "styled-components";
import { CustomTheme } from "../../../styles/type";

export type ButtonComponentStyleProps = {
  isDisable: boolean;
  type: string;
};

export const ButtonComponentStyle = styled.button<Partial<ButtonComponentStyleProps>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: ${(props) => (props.isDisable ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isDisable ? 0.5 : 1)};
  background-color: ${(props) =>
    props.type === 'cash_out' ? (props) => (props.theme as CustomTheme).colors.btnCashOutColor00 : (props.theme as CustomTheme).colors.primary60
  };
  border-radius: ${(props) =>
    props.type === 'cash_out' ? '0.25rem' : 'none'
  };
  border: none;
  transition-duration: 0.2s;
  padding: 0.625rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-size: ${(props) => (props.theme as CustomTheme).fontSizes.bg};

  &:hover {
    background-color: ${(props) =>
    props.type === 'cash_out' ? (props.theme as CustomTheme).colors.btnCashOutColor10 : (props.theme as CustomTheme).colors.btnClickBackColor
  };
  }
`;

type ButtonTextProps = {
  type?: string;
};

export const ButtonText = styled.span<ButtonTextProps>`
  color: ${(props) =>
    props.type === 'cash_out' ? 'black' : (props.theme as CustomTheme).colors.textColor
  };
  font-size: ${(props) => (props.theme as CustomTheme).fontSizes.bg};
  transition-duration: 0.2s;

  &.button-text-animation {
    transform: scale(0.8);
  }
`;
