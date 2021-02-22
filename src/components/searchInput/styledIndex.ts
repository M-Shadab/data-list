import styled from "styled-components";
import { ThemeProps } from "../../utils/types";

const borderDark = ({ theme }: ThemeProps) => theme.borderDark;
const medSpace = ({ theme }: ThemeProps) => theme.space.m;
const largeSpace = ({ theme }: ThemeProps) => theme.space.l;
const opacity6 = ({ theme }: ThemeProps) => theme.opacity["0.6"];
const opacity10 = ({ theme }: ThemeProps) => theme.opacity["1"];

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: ${largeSpace};
`;

export const SearchIconContainer = styled.div`
  border-radius: 0 ${medSpace} ${medSpace} 0;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 3.2rem;
  border-top: ${borderDark};
  border-right: ${borderDark};
  border-bottom: ${borderDark};
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    opacity: ${opacity6};
    :hover {
      opacity: ${opacity10};
      transform: scale(1.13);
      transition: opacity 0.3s ease, transform 0.4s ease;
    }
  }
`;
