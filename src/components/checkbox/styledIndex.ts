import styled from "styled-components";
import { ThemeProps } from "../../utils/types";

const dark = ({ theme }: ThemeProps) => theme.palette.common.dark;
const dark8 = ({ theme }: ThemeProps) => theme.palette.common.dark8;
const medSpace = ({ theme }: ThemeProps) => theme.space.m;
const fontSize16 = ({ theme }: ThemeProps) => theme.fontSize[16];

export const StyledCheckbox = styled.div`
  label {
    font-family: Montserrat;
    font-size: ${fontSize16};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${dark8};
    margin-left: ${medSpace};
    cursor: pointer;
  }
  input[type="checkbox"] {
    cursor: pointer;
    :checked + label {
      font-weight: 600;
      color: ${dark};
    }
  }
`;
