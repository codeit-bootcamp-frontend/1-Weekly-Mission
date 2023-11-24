import styled from "styled-components";
import share from "../images/share.svg";
import changes from "../images/pen.svg";
import deletings from "../images/delete.svg";
import { useState } from "react";
import { ModalLink } from "../components/modal/Modal.js";

export const LinkOptions = [
  {
    name: "공유",
    modalTitle: "폴더 공유",
    img: share,
    color: "blue",
    buttonTitle: "추가하기",
  },
  {
    name: "이름 변경",
    modalTitle: "폴더 이름 변경",
    img: changes,
    color: "blue",
    buttonTitle: "변경하기",
  },
  {
    name: "삭제",
    modalTitle: "폴더 삭제",
    img: deletings,
    color: "red",
    buttonTitle: "삭제하기",
  },
];

function LinkInfo({ folderName, nowFolderId, userId }) {
  const [modalLinkName, setModalLinkName] = useState("");

  const handleModalLink = (e) => {
    setModalLinkName(e.target.innerText);
  };
  const handleCloseModalLink = (e) => setModalLinkName("");

  return (
    <>
      <Wrapper>
        <FolderTitle>{folderName ? folderName : "전체"}</FolderTitle>
        <HandleLink $isDisplay={folderName !== "전체"}>
          {LinkOptions.map((option) => {
            return (
              <ContentButton key={option.name} onClick={handleModalLink}>
                <ContentImg src={option.img} alt={option.name} />
                <ContentTitle>{option.name}</ContentTitle>
              </ContentButton>
            );
          })}
        </HandleLink>
      </Wrapper>
      {modalLinkName === "공유" ? (
        <ModalLink
          LinkOptions={LinkOptions[0]}
          folderName={folderName}
          onClose={handleCloseModalLink}
          nowFolderId={nowFolderId}
          userId={userId}
        />
      ) : (
        false
      )}
      {modalLinkName === "이름 변경" ? (
        <ModalLink
          LinkOptions={LinkOptions[1]}
          folderName={folderName}
          onClose={handleCloseModalLink}
        />
      ) : (
        false
      )}
      {modalLinkName === "삭제" ? (
        <ModalLink
          LinkOptions={LinkOptions[2]}
          folderName={folderName}
          onClose={handleCloseModalLink}
        />
      ) : (
        false
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media (max-width: 1123px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 500px;
    flex-direction: column;
  }
`;
const FolderTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
const HandleLink = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  ${({ $isDisplay }) => (!$isDisplay ? "display: none" : "")}
`;

const ContentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ContentTitle = styled.div`
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ContentImg = styled.img`
  width: 18px;
  height: 18px;
`;
export default LinkInfo;
