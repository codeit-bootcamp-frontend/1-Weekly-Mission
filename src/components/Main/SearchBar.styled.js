import styled from "styled-components";

export const S = {};

S.ImgSearch = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  width: 1.6rem;
  height: auto;
`

S.InputSearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--Gray1-80);
`

S.DivSearch = styled.div`
  position: relative;
  width: 34rem;
  padding: 1.3rem 1.6rem 1.3rem 3.2rem;
  background-color: var(--Gray1-80);
  border-radius: 1rem;

  &:focus-within {
  outline: 0.1rem solid var(--Gray5);
  }

  @media screen and (min-width: 768px) {
    width: 70.5rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`