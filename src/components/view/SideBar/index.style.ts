import styled from "styled-components";
import { CustomTheme } from "../../../styles/type";

type SideBarViewStyleProps = {};

export const SideBarViewStyle = styled.div<SideBarViewStyleProps>`
  width: 298px;
  height: 100vh;
  background-color: ${(props) => (props.theme as CustomTheme).colors.primary40};
`;