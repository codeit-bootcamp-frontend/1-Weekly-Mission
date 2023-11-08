import { styled } from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 28rem;

  & button {
    padding: 1.6rem 2rem;
    width: 100%;

    border: none;
  }

  & input {
    padding: 1.8rem 1.5rem;
    margin-bottom: 1.5rem;
    width: 100%;

    border-radius: 0.8rem;
    border: 0.1rem solid var(--linkbrary-primary-color, #6d6afe);
    background: var(--linkbrary-white, #fff);

    outline: none;
  }
`;

export const FolderName = styled.div`
  color: #9fa6b2;
  text-align: center;

  font-size: 1.4rem;
`;

export const SNS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.2rem;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    margin-top: 2.4rem;
    color: #373740;
    font-size: 1.3rem;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
  }

  & button img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
