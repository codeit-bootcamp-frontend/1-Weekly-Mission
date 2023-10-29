import styled from "styled-components";
import linkIcon from "../assets/svg/link.svg";
import { Button } from "./Button";

const AddLinkContainer = styled.form`
  display: flex;
  padding: 60px 320px;
  width: 100%;
  align-items: center;
  position: relative;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 8px 10px;
  }
`;

const AddLinkInput = styled.input`
  font-weight: 400;
  display: flex;
  width: 800px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
`;

const AddLinkButton = styled(Button)`
  width: 80px;
  font-size: 14px;
`;

const IMG = styled.img`
  position: absolute;
  left: 20px;
  z-index: 2;
`;

const AddLink = () => {
  return (
    <AddLinkContainer>
      {/* <IMG src={linkIcon} alt="링크아이콘" /> */}
      <AddLinkInput placeholder="링크를 추가해 보세요." />
      {/* <AddLinkButton name="추가하기"></AddLinkButton> */}
    </AddLinkContainer>
  );
};

export default AddLink;
