import React from "react";
import { InputContainer } from "./styles";

export const Input = ({ value, onChange }) => {
  return (
    <InputContainer>
      <input
        placeholder='Buscar'
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};
