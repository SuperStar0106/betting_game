import styled from 'styled-components';
import { CustomTheme } from '../../../styles/type';

type MainViewStyleProps = {};

export const MainViewStyle = styled.div<MainViewStyleProps>`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.theme as CustomTheme).colors.primary80};
  display: flex;
  flex-direction: row;

  .table-div {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 12px;
    gap: 0.7rem;
    align-items: center;

    .betting-result {
      display: flex;
      width: 133px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      padding-right: 2rem;
      padding-left: 2rem;
      padding-bottom: 0.875rem;
      padding-top: 0.875rem;
      border-radius: 0.375rem;
      box-sizing: border-box;
      border: 3px solid red;
      background-color: ${(props) => (props.theme as CustomTheme).colors.primary40};
      border-color: ${(props) => (props.theme as CustomTheme).colors.btnCashOutColor00};

      .total-profit {
        color: ${(props) => (props.theme as CustomTheme).colors.btnCashOutColor00};
        font-weight: ${(props) => (props.theme as CustomTheme).fontWeights.light};
        font-size: ${(props) => (props.theme as CustomTheme).fontSizes.lg};
      }

      .middle-div {
        width: 50%;
        height: 3px;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        background-color: ${(props) => (props.theme as CustomTheme).colors.primary60};
      }

      .total-result {
        display: flex;
        justify-content: center;
        align-items: center;

        & span {
          display: flex;
          color: ${(props) => (props.theme as CustomTheme).colors.btnCashOutColor00};
          justify-content: center;
        }

        & img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`;
