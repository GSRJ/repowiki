import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  font-family: monospace;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }
  p {
    font-size: 16px;
    color: #fafafa60;
    margin: 20px 0;
  }

  .details {
    text-decoration: none;
    color: rgb(27, 163, 15);
    margin: 20px 0;
    cursor: pointer;
  }

  .remove {
    text-decoration: none;
    color: #ff0000;
    margin: 20px 0;
    cursor: pointer;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
