import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getFolderLinks } from "../api/getUserFolderData";

import * as modal from "./ModalStyle.js";
import StyledButton from "./StyledButton";
import CardList from "./CardList";
import NoLinksFound from "./NoLinksFound";
import deleteImg from "../assets/images/delete.svg";
import shareImg from "../assets/images/share.svg";
import updateImg from "../assets/images/pen.svg";
import kakaoImg from "../assets/images/Kakao.svg";
import linkImg from "../assets/images/link.svg";
import facebookImg from "../assets/images/facebook.svg";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 19rem;
`;

const Buttons = styled.div`
  display: flex;
`;

const FolderButton = styled.button`
  width: fit-content;
  height: 3.5rem;
  padding: 0.8rem, 1.2rem;
  margin-right: 0.8rem;

  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;

  font-size: 1.6rem;
`;

const FolderAddButton = styled.button`
  border: 0;
  font-size: 1.6rem;
  color: #6d6afe;
  background: #fff;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 19rem;
`;

const FolderName = styled.span`
  color: #000000;
  font-size: 2.4rem;
  font-weight: 600;
`;

const CTAs = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.2rem;
`;

const CTA = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.4rem;

  color: var(--linkbrary-gray-60, #9fa6b2);
  background-color: transparent;
  border: none;

  & img {
    margin-right: 0.4rem;
  }
`;

function FolderButtons({ folders = [], toggleModal, getModalData }) {
  const [currentFolder, setCurrentFolder] = useState("");
  const [userFolderLinkData, setUserFolderLinkData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_folderLink = await getFolderLinks("");
        setUserFolderLinkData(res_folderLink);
      } catch (error) {
        throw new Error("사용자 폴더의 링크들 가져오기 실패");
      }
    };

    fetchData();
  }, []);

  const handleClick = async (e) => {
    const query = `?folderId=${e.target.value}`;
    try {
      const res = await getFolderLinks(query);
      setCurrentFolder(e.target.textContent);
      setUserFolderLinkData(res);
      console.log(userFolderLinkData.data?.length);
    } catch (error) {
      throw new Error("사용자 폴더의 링크들 가져오기 실패");
    }
  };

  const handleAddFolderClick = () => {
    toggleModal(true);
    getModalData({
      isOpen: true,
      modalTitle: "폴더 추가",
      modalContent: (
        <modal.ModalContent>
          <input placeholder="내용 입력"></input>
          <StyledButton>추가하기</StyledButton>
        </modal.ModalContent>
      ),
      closeModal: () => {
        console.log("closeModal Default");
      },
    });
  };

  const handleShareClick = () => {
    toggleModal(true);
    getModalData({
      isOpen: true,
      modalTitle: "폴더 공유",
      modalContent: (
        <modal.ModalContent>
          <modal.FolderName>폴더명</modal.FolderName>
          <modal.SNS>
            <div>
              <button as="a" style={{ background: "#fee500" }}>
                <img src={kakaoImg}></img>
              </button>
              카카오톡
            </div>
            <div>
              <button as="a" style={{ background: "#1877f2" }}>
                <img src={facebookImg}></img>
              </button>
              페이스북
            </div>
            <div>
              <button as="a" style={{ background: "#9d9d9d0a" }}>
                <img src={linkImg}></img>
              </button>
              링크 복사
            </div>
          </modal.SNS>
        </modal.ModalContent>
      ),
      closeModal: () => {
        console.log("closeModal Default");
      },
    });
  };

  const handleUpdateClick = () => {
    toggleModal(true);
    getModalData({
      isOpen: true,
      modalTitle: "폴더 이름 변경",
      modalContent: (
        <modal.ModalContent>
          <input placeholder={currentFolder}></input>
          <StyledButton>변경하기</StyledButton>
        </modal.ModalContent>
      ),
      closeModal: () => {
        console.log("closeModal Default");
      },
    });
  };

  const handleDeleteClick = () => {
    getModalData({
      isOpen: true,
      modalTitle: "폴더 삭제",
      modalContent: (
        <modal.ModalContent>
          <modal.FolderName>폴더명</modal.FolderName>
          <StyledButton
            style={{
              background: "#ff5b56",
              marginTop: "4rem",
            }}
          >
            삭제하기
          </StyledButton>
        </modal.ModalContent>
      ),
      closeModal: () => {
        console.log("closeModal Default");
      },
    });
    toggleModal(true);
  };

  const handleLinkAddClick = () => {
    toggleModal(true);
    getModalData({
      isOpen: true,
      modalTitle: "폴더에 추가",
      modalContent: (
        <modal.ModalContent>
          <modal.FolderName>링크 주소</modal.FolderName>
          흠..
          <StyledButton>추가하기</StyledButton>
        </modal.ModalContent>
      ),
      closeModal: () => {
        console.log("closeModal Default");
      },
    });
  };

  const handleLinkDeleteClick = () => {
    getModalData({
      isOpen: true,
      modalTitle: "링크 삭제",
      modalContent: (
        <modal.ModalContent>
          <modal.FolderName>링크</modal.FolderName>
          <StyledButton
            style={{
              background: "#ff5b56",
              marginTop: "4rem",
            }}
          >
            삭제하기
          </StyledButton>
        </modal.ModalContent>
      ),
      closeModal: () => {
        console.log("closeModal Default");
      },
    });
    toggleModal(true);
  };

  const items = folders?.data;
  return (
    <>
      <ButtonContainer>
        <Buttons>
          <FolderButton value="" onClick={handleClick}>
            전체
          </FolderButton>
          {items &&
            items.map((folder) => {
              return (
                <div>
                  <FolderButton
                    key={folder.id}
                    value={folder.id}
                    onClick={handleClick}
                  >
                    {folder.name}
                  </FolderButton>
                </div>
              );
            })}
        </Buttons>
        <FolderAddButton onClick={handleAddFolderClick}>
          폴더 추가 +
        </FolderAddButton>
      </ButtonContainer>
      <Div>
        <FolderName>{currentFolder}</FolderName>
        {currentFolder !== "전체" && (
          <CTAs>
            <CTA onClick={handleShareClick}>
              <img src={shareImg} alt="" />
              공유
            </CTA>
            <CTA onClick={handleUpdateClick}>
              <img src={updateImg} alt="" />
              이름 변경
            </CTA>
            <CTA onClick={handleDeleteClick}>
              <img src={deleteImg} alt="" />
              삭제
            </CTA>
          </CTAs>
        )}
      </Div>
      {userFolderLinkData.data?.length !== 0 ? (
        <CardList folderArray={userFolderLinkData?.data}></CardList>
      ) : (
        <NoLinksFound>저장된 링크가 없습니다.</NoLinksFound>
      )}
    </>
  );
}

export default FolderButtons;
