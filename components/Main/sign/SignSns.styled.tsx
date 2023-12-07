import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.4rem;
  width: 100%;
  background-color: var(--Gray2);
  border: 0.1rem solid var(--Gray3);
  border-radius: 0.8rem;
  font-size: 1.4rem;

  grid-area: sns;
  place-self: start center;

  img {
    width: 4.2rem;
    height: auto;
    margin-left: 1rem;
  }
`;
