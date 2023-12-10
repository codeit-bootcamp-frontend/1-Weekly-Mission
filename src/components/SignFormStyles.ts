import styled from "styled-components";

export const Form = styled.form`
  /* width: 25rem; */
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 0.75rem 0;
  font-size: 0.9rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 15px;
  /* margin-bottom: 0.75rem; */
  color: var(--color-gray);
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-20);
  background: var(--color-white);
  outline: none;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

//   .error {
//     border-color: var(--color-red);
//   }

//   .form__input--selected {
//     position: relative;
//     top: 5px;
//     right: 40px;
//     cursor: pointer;
//   }

export const FormButton = styled.button`
  width: 100%;
  padding: 1rem 1.25rem;
  margin-top: 18px;
  background: var(--gra-purpleblue-to-skyblue);
  border-radius: 0.5rem;
  border: none;
  color: var(--color-white);
  font-size: var(--font-small);
  font-weight: var(--font-semibold);
  cursor: pointer;
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-top: 0.75rem;
  color: var(--color-red);
  font-size: 0.875rem;
`;
