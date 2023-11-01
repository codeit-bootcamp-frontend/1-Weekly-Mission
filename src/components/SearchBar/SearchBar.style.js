import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;

  form {
    position: relative;
    margin-left: -1.6rem;
    padding-left: 1.6rem;

    input {
      width: 100%;
      border-radius: 1rem;
      background: #f5f5f5;
      padding: 1.5rem 1.6rem 1.5rem 4.8rem;
      border: none;
      font-size: 1.6rem;
      line-height: 150%;
    }

    img {
      position: absolute;
      width: 1.6rem;
      height: 1.6rem;
      top: 1.9rem;
      left: 3.2rem;
    }
  }
`;
