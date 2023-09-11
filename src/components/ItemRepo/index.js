import React from "react";
import { ItemContainer } from "./styles";

export const ItemRepo = ({ repo, remove }) => {
  const handleRemove = (id) => {
    remove(repo.id);
  };
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a
        href={repo.html_url}
        target='blank'
        className='details'
      >
        Ver repositório
      </a>
      <button
        type='button'
        onClick={handleRemove}
        className='remove'
      >
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
};
