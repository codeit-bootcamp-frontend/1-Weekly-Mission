import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  font-size: 1.4rem;

  grid-area: form;
  place-self: center center;
`;

export const SubmitButton = styled.button`
  max-width: 40rem;
  padding: 1.6rem 2rem;
  margin-top: 2.5rem;
  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
  border-radius: 0.8rem;
  border: none;
  text-decoration: none;
  text-align: center;
  font-size: 1.8rem;
  color: var(--White);
`;
