import styled from "styled-components";
import { CustomTheme } from "../../../styles/type";

export const SideBarViewStyle = styled.div`
  width: 298px;
  height: 100vh;
  background-color: ${(props) => (props.theme as CustomTheme).colors.primary40};
  font-size: ${(props) => (props.theme as CustomTheme).fontSizes.bg};
  line-height: 1.25rem;
  font-weight: ${(props) => (props.theme as CustomTheme).fontWeights.light};
  padding: 0.75rem;
  color: ${(props) => (props.theme as CustomTheme).colors.textColor};

  .font-bg {
    font-size: ${(props) => (props.theme as CustomTheme).fontSizes.bg};
    line-height: 1.25rem;
  }

  .font-sm {
    font-size: ${(props) => (props.theme as CustomTheme).fontSizes.sm};
    line-height: 1.25rem;
  }

  .pick-btn {
    height: 2.75rem;
    margin-bottom: 0.75rem;

    & button {
      border-radius: 0.25rem;
    }
  }

  .cash-out-btn {
    height: 3.5rem;
  }
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

export const BetAmount = styled.div`
  display: flex;
  margin-bottom: 0.75rem;

  .betAmountBtn {
    width: 3.5rem;

    & button {
      border-radius: none;
    }

    &.btnRadius button {
      border-bottom-right-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      position: relative;

      &::before {
        content: "";
        top: 20%;
        bottom: 25%;
        width: 0.125rem;
        left: -1px;
        position: absolute;
        background-color: ${(props) => (props.theme as CustomTheme).colors.primary80};
      }
    }
  }
`;

export const ItemCount = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  .count-div {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  & label {
    margin-bottom: 0.25rem;
  }
`;