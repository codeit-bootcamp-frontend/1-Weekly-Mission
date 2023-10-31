import styled from "styled-components"

const SelectButton = styled.button`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: var(--white);

  &:hover {
    background-color: var(--gray10);
    p {color: var(--primary);}
  }
`

const selectMenuButton = ({ children }) => {
  <SelectButton>
    <p>{children}</p>
  </SelectButton>
}

export default selectMenuButton;