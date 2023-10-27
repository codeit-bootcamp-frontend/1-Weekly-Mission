import styled from "styled-components";
import { BlueWrapper } from "./Wrapper";
import StyledButton from "./Button";
import linkIcon from "../../Assets/link.svg";

const Wrapper = styled(BlueWrapper)`
  padding: 60px 0 90px;

  @media (max-width: 1199px) and (min-width: 768px) {
    padding: 60px 32.5px 90px;
  }

  @media (max-width: 767px) {
    padding: 24px 32px 40px;
  }
`;

const Form = styled.form`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background-color: #fff;

  @media (max-width: 1199px) and (min-width: 768px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
    padding: 8px 10px;
  }
`;

const LinkAddInput = styled.input`
  font-size: 1.6rem;
  border: none;
  flex: 1;
  height: 37px;

  &::placeholder {
    color: #9fa6b2;
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const handleButtonClick = (e) => {
  e.preventDefault();
};

function LinkBar() {
  return (
    <Wrapper>
      <Form>
        <Icon src={linkIcon} alt={linkIcon} />
        <LinkAddInput placeholder="링크를 추가해 보세요" />
        <StyledButton onClick={handleButtonClick}> 추가하기</StyledButton>
      </Form>
    </Wrapper>
  );
}

export default LinkBar;
