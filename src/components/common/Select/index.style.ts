import styled from "styled-components";
import { CustomTheme } from "../../../styles/type";

export const SelectComponentStyle = styled.select`
  display: flex;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0.625rem;
  font-size: 16px;
  border: 1px solid;
  border-color: ${(props) => (props.theme as CustomTheme).colors.primary60};
  border-width: 2px;
  border-radius: 0.25rem;
  background-color: ${(props) => (props.theme as CustomTheme).colors.primary80};
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.12);
  color: ${(props) =>
    (props.theme as CustomTheme).colors.textColor
  };

  &:focus {
    border-color: ${(props) => (props.theme as CustomTheme).colors.primary20};
    color: ${(props) => (props.theme as CustomTheme).colors.white};
  }
`;