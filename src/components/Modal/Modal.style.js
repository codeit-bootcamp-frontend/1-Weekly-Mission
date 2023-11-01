import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  z-index: 999999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--gray20);
  background: var(--white);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const Title = styled.p`
  color: var(--gray100);
  font-size: 2rem;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Input = styled.input`
  display: flex;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--primary);
  background: var(--white);
`;

export const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 600;
`;
