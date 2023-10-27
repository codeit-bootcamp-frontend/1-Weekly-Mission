import styled from "styled-components";

const SimpleButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  background: var(--color-white);
  font-size: 1rem;
  line-height: 1.2rem;
  cursor: pointer;
`;

export default function ActiveButton({ label }) {
  return <SimpleButton>{label}</SimpleButton>;
}
