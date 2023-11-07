import styled from "styled-components";

const DefaultButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;

const BaseButton = ({ name }) => {
  return <DefaultButton>{name}</DefaultButton>;
};

export { BaseButton };
