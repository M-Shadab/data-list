import React from "react";
import { SearchInputProps } from "../../utils/types";
import { StyledInput } from "../input/styledInput";
import { Wrapper, SearchIconContainer } from "./styledIndex";
import SearchIcon from "../../assets/svgs/search.svg";

const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => {
  return (
    <Wrapper>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SearchIconContainer>
        <img src={SearchIcon} alt="SearchIcon" />
      </SearchIconContainer>
    </Wrapper>
  );
};

export default SearchInput;
