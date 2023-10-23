import styled, { keyframes } from 'styled-components';
import { CustomTheme } from '../../../styles/type';

type MineComponentStyleProps = {
  isBomb: boolean;
  isShowImg: boolean;
  isBombExplosion: boolean;
};

const scaleAnimation = keyframes<MineComponentStyleProps>`
  0% {
    transform: scale(1);
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary60};
  }
  30% {
    transform: scale(1.1);
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary60};
  }
  70% {
    transform: scale(1);
  }
  90% {
    transform: scale(0);
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};
  }
  100% {
    transform: scale(1);
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};
    background-size: 5rem, 10rem;
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    box-shadow: none;
    border-radius: 0.5rem;
  }
  @keyframes hideImage {
    0%, 30% {
      display: none;
    }
  }
`;

const initialAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const MineComponentStyle = styled.button<MineComponentStyleProps>`
  // animation: ${initialAnimation} 0.2s forwards;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
  padding: 0;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: ${(props) => (props.theme as CustomTheme).colors.primary60};
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0.3em 0 0 ${(props) => (props.theme as CustomTheme).colors.primary40};
  box-sizing: border-box;

  &:hover {
    transform: translateY(-0.15em);
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary20};    
  }

  &:active {
    transform: none;
  }

  &.clicked {
    animation: ${scaleAnimation} 1.0s forwards;
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};
  }

  &.explosion {
    animation: ${initialAnimation} 0.2s forwards;
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};
    box-shadow: none;

    & > .explosion {
      display: none;
    }

    & > .back-img {
      opacity: 0.5;
      transform: scale(0.7);
    }
  }

  &.clicked-after {
    transform: scale(1);
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};
    background-size: 4.5rem;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: none;
    border-radius: 0.5rem;

    & > .back-img {
      &.back-main {
        transform: scale(0.9);
        transition-duration: 0.2s;
      }
    }
  }

  &.clicked-after-release {
    transform: scale(1);
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};
    background-size: 5rem;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: none;
    border-radius: 0.5rem;
  }

  &.clicked-release {
    transform: none;
    transition-duration: 0.2s;
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary20};
  }

  & > .back-img {
    animation: hideImage linear infinite;
    display: ${(props) => !props.isShowImg && 'none'};
    position: absolute;
    width: 5rem;
    height: 5rem;

    &.explosion {
      width: 10rem;
      height: 10rem;
    }
  }
`;
