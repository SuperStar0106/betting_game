import styled from 'styled-components';
import { CustomTheme } from '../../../styles/type';

type MainViewStyleProps = {};

export const MainViewStyle = styled.div<MainViewStyleProps>`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.theme as CustomTheme).colors.primary80};
  display: flex;
  flex-direction: row;
`;
