import React from "react";
import { ItemContainer } from "./styles";

export const ItemRepo = () => {
  return (
    <ItemContainer>
      <h3>Gerson</h3>
      <p>teste</p>
      <a
        href=''
        className='details'
      >
        Ver repositório
      </a>
      <a
        href=''
        className='remove'
      >
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
};
