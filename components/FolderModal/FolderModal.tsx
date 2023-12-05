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
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    values: string;
  };
  addLinkInput: {
    values: string;
  };
  editFolder: {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    values: string;
  };
  targetURL: string;
  folderName: string;
  folderId: undefined | string | string[];
  folderList: FolderInfo[];
}

function FolderModal({
  modal,
  targetURL,
  addFolder,
  addLinkInput,
  editFolder,
  folderName,
  folderList,
  folderId,
}: Props) {
  return (
    <Modal onClick={modal.handleClick}>
      {(() => {
        if (modal.target === "AddFolder") {
          return <AddFolder onChange={addFolder.handleChange} value={addFolder.values} />;
        }
        if (modal.target === "AddLinkToFolderFromInput") {
          return <AddLinkToFolder folderList={folderList}>{addLinkInput.values}</AddLinkToFolder>;
        }
        if (modal.target === "AddLinkToFolderFromCard") {
          return <AddLinkToFolder folderList={folderList}>{targetURL}</AddLinkToFolder>;
        }
        if (modal.target === "shareFolder") {
          return <Share folderId={folderId}>{folderName}</Share>;
        }
        if (modal.target === "changeFolderName") {
          return <EditFolder onChange={editFolder.handleChange} value={editFolder.values}></EditFolder>;
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
