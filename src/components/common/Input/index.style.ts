import styled from 'styled-components';
import { CustomTheme } from '../../../styles/type';

type StyledInputProps = {
  isInput?: boolean;
};

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconImage = styled.img`
  position: flex;
  position: absolute;
  right: 0px;
  width: 20px;
  height: 20px;
  align-items: center;
  padding-right: 0.75rem;
  pointer-events: none;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.625rem;
  padding-right: 2.4rem;
  font-size: 16px;
  border: 1px solid;
  border-color: ${(props) => (props.theme as CustomTheme).colors.primary60};
  border-width: 2px;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  background-color: ${(props) => props.isInput ? (props.theme as CustomTheme).colors.primary60 : (props.theme as CustomTheme).colors.primary80};
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.12);
  
  border-bottom-right-radius: ${(props) =>
    props.isInput ? '0.25rem' : '0rem'
  };
  border-top-right-radius: ${(props) =>
    props.isInput ? '0.25rem' : '0rem'
  };
  color: ${(props) =>
    props.isInput
      ? (props.theme as CustomTheme).colors.white
      : (props.theme as CustomTheme).colors.textColor
  };
  outline: none;
  transition-duration: 0.2s;

  &:focus {
    border-color: ${(props) => (props.theme as CustomTheme).colors.primary20};
    color: ${(props) => (props.theme as CustomTheme).colors.white};
  }

  &:hover {
    border-color: ${(props) => (props.theme as CustomTheme).colors.primary20};
  }
`;