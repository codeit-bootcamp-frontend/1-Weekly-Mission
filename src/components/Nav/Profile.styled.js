import styled from "styled-components";

export const S = {};

S.DivProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: sign;
  justify-self: end;
`

S.SpanProfile = styled.span`
  display: none;
  margin-left: 1rem;

@media screen and (min-width: 768px) {
    display: block;
    color: var(--Gray5);
    font-size: 1.4rem;
    font-weight: 400;
  }
`

S.ImgProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`