import styled from "styled-components";

export const S = {};

S.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
  padding: 1rem 0 4rem;
`

S.DivUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

S.ImgUser = styled.img`
  width: 5rem;
  height: 5rem;
  @media screen and (min-width: 768px) {
    width: 5.6rem;
    height: 5.6rem;
  }
`

S.PUser = styled.p`
  color: var(--Black);
  font-size: 1.4rem;
`

S.H1User = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
`