import styled, { keyframes } from 'styled-components';
import { CustomTheme } from '../../../styles/type';

type MineComponentStyleProps = {
  isBomb: boolean;
  isShowImg: boolean;
  isBombExplosion: boolean;
  isEffectExplosion: boolean;
};

const initialAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const MineComponentStyle = styled.button<MineComponentStyleProps>`
  animation: ${initialAnimation} 0.2s forwards;
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
    transform: ${(props) => props.isShowImg && 'translateY(-0.15em)'};
    // transition-duration: 0.2s;
    // background-color: ${(props) => (props.theme as CustomTheme).colors.primary20};
  }

  &.bomb-effect {
    box-shadow: none;
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};

    & > .back-img {
      animation: none;
    }
  }

  &:active {
    transform: none;
  }

  &.clicked {
    animation: scaleAnimation 1s forwards;
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};

    @keyframes scaleAnimation {
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
    }
  }

  &.explosion {
    background-color: ${(props) => (props.theme as CustomTheme).colors.primary00};
    box-shadow: none;

    & > .explosion {
      display: none;
    }

    & > .back-img {
      animation: not-open-item 0.2s forwards;
      animation-delay: 0.2s;
      opacity: 0.5;
      transform: scale(0);

      @keyframes not-open-item {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(0.7);
        }
      }
    }
  }

  &.after-click:active {
    & > .back-img {
      transform: scale(0.9);
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
    display: ${(props) => !props.isShowImg && 'none'};
    animation: ${(props) => !props.isEffectExplosion && 'item-click 1s forwards'};

    position: absolute;
    width: 5rem;
    height: 5rem;

    @keyframes item-click {
      0% {
        visibility: hidden;
        transform: none;
      }
      90% {
        visibility: hidden;
        transform: scale(0);
      }
      91% {
        visibility: visible;
      }
      100% {
        visibility: visible;
      }
    }

    &.explosion {
      width: 10rem;
      height: 10rem;
    }
  }
`;
