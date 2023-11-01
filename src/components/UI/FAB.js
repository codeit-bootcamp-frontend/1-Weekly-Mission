import styled from "styled-components";

const FabButton = styled.button`
  padding: 0.8rem 2.4rem;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 10.1rem;
  border-radius: 2rem;
  border: 0.1rem solid var(--white);
  background: var(--primary);
  gap: 0.4rem;
  display: none;
  z-index: 1;

  &:hover {
    cursor: pointer;
    font-weight: 700;
  }

  @media (max-width: 779px) {
    display: flex;
  }
`;
// display: none에서 flex로 바뀌는 걸 FAB 컴포넌트가 아니라 상위 컴포넌트 내에서 지정하고 싶은데 어떻게 해야 할까요?

const Text = styled.p`
  color: var(--gray10);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.03rem;
`;

const AddIcon = styled.img`
  color: var(--gray10);
  width: 16px;
  height: 16px;
`;

const FAB = ({ children, src, customStyle }) => {
  return (
    <FabButton style={customStyle}>
      <Text>{children}</Text>
      <AddIcon src={src}></AddIcon>
    </FabButton>
  );
};

export default FAB;
