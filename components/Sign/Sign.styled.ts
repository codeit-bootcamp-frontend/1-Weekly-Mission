import Image from "next/image";
import styled from "styled-components";

interface errProps {
  $err: string;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

export const InputTagContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 5px;
`;

export const InputTag = styled.input<errProps>`
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray20);
  font-size: 1.6rem;
  line-height: 150%;

  &:focus {
    border: 1px solid var(--primary);
  }

  &::placeholder {
    font-size: 1.4rem;
  }

  ${({ $err }) =>
    $err &&
    `
    border: 1px solid var(--red);
  `}
`;

export const EyesOff = styled(Image)`
  position: absolute;
  top: 43px;
  left: 90%;
  cursor: pointer;
`;

export const EyesOn = styled(Image)`
  position: absolute;
  top: 43px;
  left: 90%;
  cursor: pointer;
`;

export const ErrMsg = styled.span`
  width: 100%;
  margin-top: -0.4rem;
  margin-left: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--red);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.4rem;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
`;
