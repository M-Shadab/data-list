import styled from "styled-components";
import { CircleProps, ThemeProps } from "../utils/types";

const borderLight = ({ theme }: ThemeProps) => theme.borderLight;
const medSpace = ({ theme }: ThemeProps) => theme.space.m;
const smallSpace = ({ theme }: ThemeProps) => theme.space.s;
const radius50 = ({ theme }: ThemeProps) => theme.radius[50];

export const DataListWrapper = styled.div`
  > div:first-child {
    margin-bottom: ${medSpace};
  }
`;

export const StyledList = styled.ul`
  margin-top: ${medSpace};
  padding: ${medSpace} ${smallSpace} 0;
  border-top: ${borderLight};
  li {
    list-style: none;
    margin-bottom: ${smallSpace};
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  > div:not(:last-child) {
    margin-right: ${medSpace};
  }
`;

export const CircleCount = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: ${smallSpace};
  }
`;

export const Circle = styled.div<CircleProps>`
  width: 20px;
  height: 20px;
  border-radius: ${radius50};
  background: ${({ color }) => color};
`;
