import styled from "styled-components";
import { ThemeProps } from "../../utils/types";

const opacity4 = ({ theme }: ThemeProps) => theme.opacity["0.4"];

export const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eee;
  opacity: ${opacity4};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
