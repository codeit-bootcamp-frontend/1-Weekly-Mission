import { FolderInfo } from "@/API/getCurrentUsersFolderData";
import AddFolder from "@/modals/AddFolder";
import AddLinkToFolder from "@/modals/AddLinkToFolder";
import DeleteFolder from "@/modals/DeleteFolder";
import DeleteLink from "@/modals/DeleteLink";
import EditFolder from "@/modals/EditFolder";
import Modal from "@/modals/Modal";
import Share from "@/modals/Share";
import { ChangeEvent, FormEvent, MouseEvent } from "react";

interface Props {
  modal: {
    handleClick: (e: MouseEvent | FormEvent) => void;
    target: string | null | undefined;
  };
  addFolder: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  addLinkInput: {
    value: string;
  };
  editFolder: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  targetURL: string;
  folderName: string;
  folderId: undefined | string | string[];
  folderInfo: FolderInfo[];
}

function FolderModal({
  modal,
  targetURL,
  addFolder,
  addLinkInput,
  editFolder,
  folderName,
  folderInfo,
  folderId,
}: Props) {
  return (
    <Modal onClick={modal.handleClick}>
      {(() => {
        if (modal.target === "AddFolder") {
          return <AddFolder onChange={addFolder.onChange} value={addFolder.value} />;
        }
        if (modal.target === "AddLinkToFolderFromInput") {
          return <AddLinkToFolder folderList={folderInfo}>{addLinkInput.value}</AddLinkToFolder>;
        }
        if (modal.target === "AddLinkToFolderFromCard") {
          return <AddLinkToFolder folderList={folderInfo}>{targetURL}</AddLinkToFolder>;
        }
        if (modal.target === "shareFolder") {
          return <Share folderId={folderId}>{folderName}</Share>;
        }
        if (modal.target === "changeFolderName") {
          return <EditFolder onChange={editFolder.onChange} value={editFolder.value}></EditFolder>;
        }
        if (modal.target === "deleteFolder") {
          return <DeleteFolder>{folderName}</DeleteFolder>;
        }
        if (modal.target === "deleteLink") {
          return <DeleteLink>{targetURL}</DeleteLink>;
        }
      })()}
    </Modal>
  );
}

export default FolderModal;
