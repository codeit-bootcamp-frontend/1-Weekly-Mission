import * as S from "@/components/kebabMenu/KebabMenu.style";
import Modal from "@/components/modal/Modal";
import ModalSelectButton from "@/components/modalSelectButton/ModalSelectButton";
import { KEBAB_MENUS, MODALS_ID } from "@/constants/constants";
import { Folder } from "@/types/type";
import { deleteLink, postLinks } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MouseEvent, useState } from "react";

interface KebabMenusProps {
  linkUrl: string;
  isKebabOpen: boolean;
  linkId: number;
  folderId: string;
  folders?: Folder[];
  setIsKebabOpen: (isOpen: boolean) => void;
}

interface KebabProps {
  iconTitle: string;
  modalId: string;
}

const KebabMenu = ({ linkUrl, isKebabOpen, setIsKebabOpen, linkId, folders, folderId }: KebabMenusProps) => {
  const queryClient = useQueryClient();
  const [modalComponent, setModalComponent] = useState("");

  const handleMenuClick = (e: MouseEvent<HTMLButtonElement>, kebab: KebabProps) => {
    e.stopPropagation();

    setModalComponent(kebab.modalId);
    setIsKebabOpen(false);
  };

  const handleDeleteLink = () => {
    deleteLinkMutation.mutate(linkId.toString());
  };
  const deleteLinkMutation = useMutation({
    mutationFn: (linkId: string) => deleteLink(linkId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links", folderId] });
      setModalComponent("");
    },
    onError: (error) => {
      console.error(error);
    },
  });

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
    addLinkMutation.mutate({ linkUrl, selectedFolderIds: Object.keys(selectedFolders).map(String) });
  };
  const addLinkMutation = useMutation({
    mutationFn: ({ linkUrl, selectedFolderIds }: { linkUrl: string; selectedFolderIds: string[] }) =>
      postLinks(linkUrl, selectedFolderIds),
    onSuccess: () => {
      Object.keys(selectedFolders).forEach((folderId) => {
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
      <S.KebabButtonList $isOpen={isKebabOpen}>
        {KEBAB_MENUS.map((kebab) => (
          <li key={folderId + kebab.iconTitle}>
            <S.KebabMenuButton onClick={(e) => handleMenuClick(e, kebab)}>{kebab.iconTitle}</S.KebabMenuButton>
          </li>
        ))}
      </S.KebabButtonList>
      {modalComponent === MODALS_ID.delete && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>링크 삭제</Modal.Title>
          <Modal.TargetName>{linkUrl}</Modal.TargetName>
          <Modal.RedButton handleClick={handleDeleteLink}>삭제하기</Modal.RedButton>
        </Modal>
      )}
      {modalComponent === MODALS_ID.addLinkToFolder && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더에 추가</Modal.Title>
          <Modal.TargetName>{linkUrl}</Modal.TargetName>
          <Modal.SelectButtonWrap>
            {folders?.map((folder) => (
              <li key={folder.id}>
                <ModalSelectButton
                  folderName={folder.name}
                  linkCount={folder.link_count}
                  onClick={() => handleSelectFolder(+folder.id)}
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

export default KebabMenu;
