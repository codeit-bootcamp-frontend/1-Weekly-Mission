import * as S from "@/components/folderAddBar/FolderAddBar.style";
import Modal from "@/components/modal/Modal";
import ModalSelectButton from "@/components/modalSelectButton/ModalSelectButton";
import { MODALS_ID } from "@/constants/constants";
import linkIcon from "@/images/link.png";
import { Folder } from "@/types/type";
import { postLinks } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

interface FolderAddBarProps {
  folders: Folder[];
  isSticky: boolean;
  isHidden: boolean;
}

const FolderAddBar = ({ folders, isSticky, isHidden }: FolderAddBarProps) => {
  const queryClient = useQueryClient();
  const [addLinkValue, setAddLinkValue] = useState("");
  const [modalComponent, setModalComponent] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setAddLinkValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalComponent(MODALS_ID.addLinkToFolder);
  };

  const [selectedFolders, setSelectedFolders] = useState<{ [key: number]: boolean }>({});

  const handleSelectFolder = (folderId: number) => {
    setSelectedFolders((prevSelectedFolders) => {
      const newSelectedFolders = { ...prevSelectedFolders };
      if (newSelectedFolders[folderId]) {
        delete newSelectedFolders[folderId];
      } else {
        newSelectedFolders[folderId] = true;
      }
      return newSelectedFolders;
    });
  };
  const addLink = () => {
    createFolderMutation.mutate({ addLinkValue, selectedFolderIds: Object.keys(selectedFolders).map(String) });
  };
  const createFolderMutation = useMutation({
    mutationFn: ({ addLinkValue, selectedFolderIds }: { addLinkValue: string; selectedFolderIds: string[] }) =>
      postLinks(addLinkValue, selectedFolderIds),
    onSuccess: () => {
      Object.keys(selectedFolders)
        .map(String)
        .forEach((folderId) => {
          queryClient.invalidateQueries({ queryKey: ["links", folderId] });
          queryClient.invalidateQueries({ queryKey: ["folders"] });
        });
      setModalComponent("");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return (
    <>
      <S.AddLinkBar $isSticky={isSticky} $isHidden={isHidden} aria-hidden={isHidden}>
        <S.AddLinkForm onSubmit={handleSubmit}>
          <Image src={linkIcon} alt="링크 아이콘" />
          <S.AddLinkInput placeholder="링크를 추가해 보세요" onChange={handleInputChange} value={addLinkValue} />
          <S.AddLinkButton>추가하기</S.AddLinkButton>
        </S.AddLinkForm>
      </S.AddLinkBar>
      {modalComponent === MODALS_ID.addLinkToFolder && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더에 추가</Modal.Title>
          <Modal.TargetName>{addLinkValue}</Modal.TargetName>
          <Modal.SelectButtonWrap>
            {folders?.map((folder) => (
              <li key={folder.id}>
                <ModalSelectButton
                  folderName={folder.name}
                  linkCount={folder.link_count}
                  onClick={() => handleSelectFolder(folder.id)}
                />
              </li>
            ))}
          </Modal.SelectButtonWrap>
          <Modal.BlueButton handleClick={addLink}>추가하기</Modal.BlueButton>
        </Modal>
      )}
    </>
  );
};

export default FolderAddBar;
