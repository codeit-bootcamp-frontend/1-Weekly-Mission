import { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import useGetFolders from "../../hooks/useGetFolders";
import checkIcon from "@/src/image/check.svg";
import closeBtn from "@/src/image/close.svg";
import Image from "next/image";

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
  $isSelected?: boolean;
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

  return (
    <CustomModal isOpen={isOpen} closeModal={closeModal} contentLabel="폴더에 추가 모달" ariaHideApp={false}>
      <CloseButton src={closeBtn} alt="닫는 버튼" onClick={closeModal} />
      <ModalContent>
        <Descripton>
          <ModalHeading>폴더에 추가</ModalHeading>
          <ModalLink>{link}</ModalLink>
        </Descripton>
        <FolderList>
          {folders?.map((item) => {
            const isSelected = selectedFolder === item.id;

            return (
              <FolderItems key={item.id} $isSelected={isSelected} onClick={() => handleSelecteFolder(item.id)}>
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

  border-radius: 1.5rem;
  border: 0.1rem solid var(--stroke-light, #dee2e6);
  background: var(--linkbrary-white);
`;

const ModalContent = styled.div`
  display: flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

const CloseButton = styled(Image)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
`;

const Descripton = styled.div`
  display: flex;
  width: 28rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`;

const ModalHeading = styled.h2`
  color: var(--gray10);

  font-size: 2rem;
  font-weight: 700;
`;

const ModalLink = styled.p`
  color: var(--gray20);
  text-align: center;

  font-size: 1.4rem;
  line-height: 2.2rem;
`;

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

const FolderItems = styled.button<StyledProps>`
  display: flex;
  width: 26.4rem;
  padding: 0.8rem;
  justify-content: space-between;
  align-items: center;

  border: none;
  border-radius: 0.8rem;

  background: ${({ $isSelected }) => ($isSelected ? "var(--bg)" : "none")};

  cursor: pointer;
`;

const FolderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const FolderTitle = styled.p<StyledProps>`
  color: ${({ $isSelected }) => ($isSelected ? "var(--primary)" : "var(--gray10)")};

  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const FolderLinksCount = styled.p`
  color: var(--gray20);

  font-size: 1.4rem;
`;

const CheckIcon = styled(Image)`
  width: 1.4rem;
  height: 1.4rem;
  flex-shrink: 0;
`;

const ModalAddButton = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);

  color: var(--grayLight);
  font-size: 1.6rem;
  font-weight: 600;
`;

export default AddLinkModal;
