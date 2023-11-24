import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem 3.2rem 4rem 3.2rem;
  background-color: var(--Gray1);
`;

export const InputWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32rem;
  height: 5.4rem;

  @media screen and (min-width: 768px) {
    width: 66rem;
  }
  @media screen and (min-width: 1200px) {
    width: 104rem;
  }
`;

export const Input = styled.input`
  width: 34rem;
  padding: 0.8rem 1rem 0.8rem 2.8rem;
  border: 0.1rem solid var(--Primary);
  border-radius: 1.5rem;
  font-size: 1.4rem;
  line-height: 3.7rem;

  &:focus {
    outline: 0.1rem solid var(--Primary);
  }
  @media screen and (min-width: 768px) {
    width: 68rem;
  }
  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;

export const InputImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const InputButton = styled.button`
  pointer-events: all;
  padding: 1rem 1.6rem;
  border: 0;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--Gray1);
  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
`;
