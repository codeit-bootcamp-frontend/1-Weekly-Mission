import shareIcon from "assets/share.svg";
import penIcon from "assets/pen.svg";
import deleteIcon from "assets/delete.svg";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  gap: 12px;
`;

const OptionsContainer = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  cursor: pointer;
`;

const Option = styled.button`
  padding: 0;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #9fa6b2;
`;

const actions = [
  { name: "share", icon: shareIcon },
  { name: "pen", icon: penIcon },
  { name: "delete", icon: deleteIcon },
];

export default function Options() {
  return (
    <Container>
      {actions.map((action, index) => (
        <OptionsContainer key={index}>
          <img src={action.icon} />
          <Option>{action.name}</Option>
        </OptionsContainer>
      ))}
    </Container>
  );
}
