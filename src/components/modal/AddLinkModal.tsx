import { useState, useEffect } from "react";
import useGetFolders from "../../hooks/useGetFolders";
import Modal from "react-modal";
import styled from "styled-components";
import closeBtn from "../../image/close.svg";
import checkIcon from "../../image/check.svg";

interface AddLinkModalProps {
  isOpen: boolean;
  closeModal: () => void;
  link: string;
}

interface Folder {
  id: number;
  name: string;
  link?: {
    count: number;
  };
}

interface StyledProps {
  isSelected?: boolean;
}

const AddLinkModal = ({ isOpen, closeModal, link }: AddLinkModalProps) => {
  const folders: Folder[] | undefined = useGetFolders();
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);

  const handleSelecteFolder = (folderId: number) => {
    setSelectedFolder(folderId);
  };

  useEffect(() => {
    if (!isOpen) {
      setSelectedFolder(null);
    }
  }, [isOpen]);

  // style, 기능 수정 예정
  return (
    <CustomModal isOpen={isOpen} closeModal={closeModal} contentLabel="폴더에 추가 모달" ariaHideApp={false}>
      <CloseButton src={closeBtn} onClick={closeModal} />
      <ModalContent>
        <Descripton>
          <ModalHeading>폴더에 추가</ModalHeading>
          <ModalLink>{link}</ModalLink>
        </Descripton>
        <FolderList>
          {folders?.map((item) => {
            const isSelected = selectedFolder === item.id;

            return (
              <FolderItems key={item.id} isSelected={isSelected} onClick={() => handleSelecteFolder(item.id)}>
                <FolderItem>
                  <FolderTitle>{item.name}</FolderTitle>
                  <FolderLinksCount>{`${item.link?.count}개 링크`}</FolderLinksCount>
                </FolderItem>
                {isSelected && <CheckIcon src={checkIcon} alt="체크 아이콘" />}
              </FolderItems>
            );
          })}
        </FolderList>
        <ModalAddButton onClick={closeModal}>추가하기</ModalAddButton>
      </ModalContent>
    </CustomModal>
  );
};

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 15px;
  border: 1px solid var(--stroke-light, #dee2e6);
  background: var(--gray-white, #fff);
`;

const ModalContent = styled.div`
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const Descripton = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const ModalHeading = styled.h2`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ModalLink = styled.p`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const FolderItems = styled.button<StyledProps>`
  display: flex;
  width: 264px;
  padding: 8px;
  justify-content: space-between;
  align-items: center;

  border: none;
  border-radius: 8px;

  background: ${({ isSelected }) => (isSelected ? "var(--linkbrary-bg, #F0F6FF)" : "none")};

  cursor: pointer;
`;

const FolderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FolderTitle = styled.p<StyledProps>`
  color: ${({ isSelected }) => (isSelected ? "var(--linkbrary-primary-color, #6D6AFE)" : "var(--linkbrary-gray-100, #373740)")};

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const FolderLinksCount = styled.p`
  color: var(--linkbrary-gray-60, #9fa6b2);

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CheckIcon = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;

const ModalAddButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));

  color: var(--grey-light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;

export default AddLinkModal;
