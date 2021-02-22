import styled from "styled-components";
import { ThemeProps } from "../../utils/types";

const primary = ({ theme }: ThemeProps) => theme.palette.primary.main;
const dark6 = ({ theme }: ThemeProps) => theme.palette.common.dark6;
const fontSize16 = ({ theme }: ThemeProps) => theme.fontSize[16];
const fontSize24 = ({ theme }: ThemeProps) => theme.fontSize[24];

export const H1 = styled.h1`
  font-family: Montserrat;
  font-size: ${fontSize24};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${primary};
`;

export const Font16 = styled.p`
  font-family: Montserrat;
  font-size: ${fontSize16};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${dark6};
`;
