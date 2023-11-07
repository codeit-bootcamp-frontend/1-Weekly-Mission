import styled from 'styled-components';

function ModalInput({ className }) {
  return (
    <form>
      <Input name="text" type="text" autoComplete="on" required placeholder="내용 입력" className={className}></Input>
    </form>
  );
}

export const Input = styled.input`
  display: flex;
  width: 35rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--gray20);
  background: var(--white);

  &:hover {
    border: 1px solid var(--primary);
  }
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

export default ModalInput;
