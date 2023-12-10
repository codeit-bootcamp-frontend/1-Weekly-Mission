import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 40rem;

  label {
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
  }

  .inputBox {
    position: relative;

    img {
      position: absolute;
      top: 2rem;
      right: 1.5rem;
      cursor: pointer;
    }
  }

  .errorMsg {
    color: var(--red);
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const Input = styled.input<props>`
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 1.8rem 1.5rem;
  background: var(--white);
  border: ${(props) => props["aria-invalid"]};
  width: 40rem;
  height: 6rem;
  color: var(--gray100);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  &:focus {
    border: 1px solid var(--primary);
    outline: none;
  }
`;
