import React from "react";
import { ButtonContainer } from "./styles";

export const Button = ({ onClick }) => {
  return (
    <ButtonContainer
      type='button'
      onClick={onClick}
    >
      Buscar
    </ButtonContainer>
  );
};
