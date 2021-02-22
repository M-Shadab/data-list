import React from "react";
import { CheckboxProps } from "../../utils/types";
import { StyledCheckbox } from "./styledIndex";

const Checkbox = ({ id, label, checked = false, onChange }: CheckboxProps) => (
  <StyledCheckbox>
    <input type="checkbox" id={id} checked={checked} onChange={onChange} />
    <label htmlFor={id}>{label}</label>
  </StyledCheckbox>
);

export default Checkbox;
