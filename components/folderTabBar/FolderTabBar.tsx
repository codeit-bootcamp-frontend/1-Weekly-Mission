import * as S from "@/components/folderTabBar/FolderTabBar.style";
import InputField from "@/components/inputField/InputField";
import Modal from "@/components/modal/Modal";
import { ALL_LINKS_ID, MODALS_ID } from "@/constants/constants";
import { Folder } from "@/types/type";
import { postFolder } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface FolderTabBarProps {
  folders: Folder[];
  selectedFolderId: string;
}

const FolderTabBar = ({ folders, selectedFolderId }: FolderTabBarProps) => {
  const [modalComponent, setModalComponent] = useState("");
  const [folderName, setFolderName] = useState("");
  const queryClient = useQueryClient();

  const handleFolderAdd = () => {
    setModalComponent(MODALS_ID.addFolder);
  };
  const createFolder = () => {
    createFolderMutation.mutate(folderName);
  };
  const createFolderMutation = useMutation({
    mutationFn: (folderName: string) => postFolder(folderName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
      setModalComponent("");
      setFolderName("");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <>
      <S.TabBarWrap>
        <S.TabLinkWrap>
          <li>
            <S.FolderTabLink href={`/folder/`} className={selectedFolderId === ALL_LINKS_ID ? "active" : ""}>
              전체
            </S.FolderTabLink>
          </li>
          {folders?.map((folder) => (
            <li key={folder.id}>
              <S.FolderTabLink
                href={`/folder/${folder.id}`}
                className={folder.id === +selectedFolderId ? "active" : ""}
              >
                {folder.name}
              </S.FolderTabLink>
            </li>
          ))}
        </S.TabLinkWrap>
        <S.FolderAddButton onClick={handleFolderAdd}>
          폴더추가
          <S.AddIcon />
        </S.FolderAddButton>
      </S.TabBarWrap>
      {modalComponent === MODALS_ID.addFolder && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 추가</Modal.Title>
          <InputField value={folderName} onChange={setFolderName} />
          <Modal.BlueButton handleClick={createFolder}>추가하기</Modal.BlueButton>
        </Modal>
      )}
    </>
  );
};

export default FolderTabBar;
