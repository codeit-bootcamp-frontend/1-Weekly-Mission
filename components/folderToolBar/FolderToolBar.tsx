import * as S from "@/components/folderToolBar/FolderToolBar.style";
import InputField from "@/components/inputField/InputField";
import Modal from "@/components/modal/Modal";
import ShareButtons from "@/components/shareButtons/ShareButtons";
import { FOLDER_MANAGE_MENUS, MODALS_ID } from "@/constants/constants";
import { deleteFolder, putFolder } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

interface FolderManageMenusProps {
  iconTitle: string;
  imgSrc: StaticImageData;
  modalId: string;
}

interface FolderToolbarProps {
  folderName: string;
  folderId: string;
}

const FolderToolbar = ({ folderName, folderId }: FolderToolbarProps) => {
  const queryClient = useQueryClient();
  const [modalComponent, setModalComponent] = useState("");
  const [newFolderName, setNewFolderName] = useState(folderName);
  const router = useRouter();

  const handleMenuClick = (e: MouseEvent<HTMLButtonElement>, menu: FolderManageMenusProps) => {
    e.stopPropagation();
    setModalComponent(menu.modalId);
  };

  const handleChangeFolder = () => {
    changeFolderMutation.mutate({ folderId, newFolderName });
  };
  const changeFolderMutation = useMutation({
    mutationFn: ({ folderId, newFolderName }: { folderId: string; newFolderName: string }) =>
      putFolder(folderId, newFolderName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
      setModalComponent("");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleDeleteFolder = () => {
    deleteFolderMutation.mutate(folderId);
  };
  const deleteFolderMutation = useMutation({
    mutationFn: (folderId: string) => deleteFolder(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
      setModalComponent("");
      router.replace("/folder");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <>
      <S.ToolBarWrap>
        <S.FolderName>{folderName}</S.FolderName>
        <S.ManageButtonWrap>
          {folderName !== "전체" &&
            FOLDER_MANAGE_MENUS.map((menu, i) => (
              <li key={menu.iconTitle}>
                <S.ManageButton onClick={(e) => handleMenuClick(e, menu)}>
                  {menu.iconTitle}
                  <Image src={menu.imgSrc} alt={menu.iconTitle} />
                </S.ManageButton>
              </li>
            ))}
        </S.ManageButtonWrap>
      </S.ToolBarWrap>
      {modalComponent === MODALS_ID.share && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 공유</Modal.Title>
          <Modal.TargetName>{folderName}</Modal.TargetName>
          <ShareButtons />
        </Modal>
      )}
      {modalComponent === MODALS_ID.rename && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 이름 변경</Modal.Title>
          <InputField value={newFolderName} onChange={setNewFolderName} />
          <Modal.BlueButton handleClick={handleChangeFolder}>변경하기</Modal.BlueButton>
        </Modal>
      )}
      {modalComponent === MODALS_ID.delete && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 삭제</Modal.Title>
          <Modal.TargetName>{folderName}</Modal.TargetName>
          <Modal.RedButton handleClick={handleDeleteFolder}>삭제하기</Modal.RedButton>
        </Modal>
      )}
    </>
  );
};

export default FolderToolbar;
