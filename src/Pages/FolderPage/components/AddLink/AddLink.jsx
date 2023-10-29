import styled from "styled-components";
import linkImage from "../../../../assets/link.png";
import colors from "../../../../style/colors";
import { flexCenter } from "../../../../style/common";
const AddLinkFrame = styled.div`
  position: relative;
  display: flex;
  padding: 60px 320px 90px 320px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: ${colors.background};
`;

const AddLinkInput = styled.input`
  display: flex;
  width: 800px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid ${colors.primary};

  background: ${colors.white};
  background-repeat: no-repeat;
  background-image: url(${linkImage});
  background-position: 15px 16px;
  padding-left: 45px;
`;

const AddButton = styled.button`
  position: absolute;
  border-radius: 8px;
  background: ${colors.purpleBlueToSkyBlue};
  color: ${colors.white};
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  top: 70px;
  right: 270px;
  width: 80px;
  padding: 10px 16px;
  text-align: center;
  ${flexCenter};
`;
function AddLink() {
  return (
    <AddLinkFrame>
      <AddLinkInput type="text" placeholder="링크를 추가해 보세요." />
      <AddButton>추가하기</AddButton>
    </AddLinkFrame>
  );
}

export default AddLink;
