import styled from "styled-components";
import { ThemeProps } from "../../utils/types";

const borderDark = ({ theme }: ThemeProps) => theme.borderDark;
const medSpace = ({ theme }: ThemeProps) => theme.space.m;
const smallSpace = ({ theme }: ThemeProps) => theme.space.s;
const fontSize14 = ({ theme }: ThemeProps) => theme.fontSize[14];

export const StyledInput = styled.input`
  width: 100%;
  height: 3.2rem;
  font-size: ${fontSize14};
  padding: ${smallSpace} ${medSpace};
  outline: none;
  border: 0;
  border-radius: ${medSpace} 0 0 ${medSpace};
  border-top: ${borderDark};
  border-left: ${borderDark};
  border-bottom: ${borderDark};
`;
