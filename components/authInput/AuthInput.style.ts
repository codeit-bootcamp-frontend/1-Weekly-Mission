import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const InputInner = styled.div`
  position: relative;
`;

export const AuthInput = styled.input<{ $isValid: boolean }>`
  width: 100%;
  height: 6.2rem;
  padding: 1.5rem 1.8rem;
  gap: 0.4rem;
  border: 0.1rem solid;
  border-color: ${({ $isValid }) => ($isValid === false ? "var(--linkbrary-red);" : "var(--linkbrary-gray-20)")};
  background: var(--linkbrary-white);
  border-radius: 0.8rem;

  & :focus {
    outline-color: var(--linkbrary-primary-color);
  }
`;

export const AuthLabel = styled.label`
  width: max-content;
  color: #000;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 50%;
  transform: translateY(50%);
  cursor: pointer;
  width: 1.6rem;
  height: 1.6rem;
`;

export const Warning = styled.p`
  color: var(--linkbrary-red);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -0.6rem;
`;
