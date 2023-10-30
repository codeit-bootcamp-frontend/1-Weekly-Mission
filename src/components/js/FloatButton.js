import styled from "styled-components";
import addFloat from "../../Assets/addFloat.svg";

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledFloatButton = styled.button`
  font-family: Pretendard, sans-serif;
  margin: 0 auto;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 101px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary);
  border: none;
  border-radius: 20px;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--white);
  letter-spacing: -0.3px;
  display: none;
  z-index: 3;

  @media screen and (max-width: 767px) {
    display: block;
  }

  & ${Icon} {
    margin-left: 4px;
  }
`;

function FloatButton({ children }) {
  return (
    <StyledFloatButton>
      {children}
      <Icon src={addFloat} alt="+button" />
    </StyledFloatButton>
  );
}

export default FloatButton;
