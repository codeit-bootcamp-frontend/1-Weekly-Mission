import styled from "styled-components";
import linkImage from "../../assets/link.png";

import colors from "../../style/colors";
import { cursorPointer, flexCenter } from "../../style/common";
import { device } from "../../style/device";
import { useState } from "react";
import { ModalMaker } from "../Modal/Modal";
const AddLinkFrame = styled.form`
  position: relative;
  display: flex;
  padding: 30px 300px;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  gap: 8px;
  background: ${colors.background};

  @media ${device.tablet} {
    padding: 30px 210px;
  }

  @media ${device.mobile} {
    padding: 30px 32px;
  }
`;

const AddLinkInput = styled.input`
  display: flex;
  width: 100%;
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
  font-weight: 500;
  border: none;
  top: 42px;
  right: 320px;
  width: 80px;
  padding: 10px 16px;
  text-align: center;
  ${flexCenter};
  ${cursorPointer}

  @media ${device.tablet} {
    right: 220px;
  }

  @media ${device.mobile} {
    right: 50px;
  }
`;
function AddLink() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const handleModal = () => (e) => {
    e.preventDefault();
    let feature = "추가하기";

    setModal(ModalMaker({ feature, setIsModalOpen }));
    setIsModalOpen(true);
  };

  return (
    <>
      <AddLinkFrame onSubmit={(e) => handleModal()(e)}>
        <AddLinkInput type="text" placeholder="링크를 추가해 보세요." />
        <AddButton>추가하기</AddButton>
      </AddLinkFrame>

      {isModalOpen && modal}
    </>
  );
}

export default AddLink;
