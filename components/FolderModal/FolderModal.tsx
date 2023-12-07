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
  editFolder: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  addFolder: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  handleClick: (e: MouseEvent | FormEvent) => void;
  target: string | null | undefined;
  value: string;
  targetURL: string;
  folderName: string;
  folderId: undefined | string | string[];
  folderInfo: FolderInfo[];
}

function FolderModal({
  handleClick: modalHandleClick,
  target: modalTarget,
  targetURL,
  addFolder,
  value: inputValue,
  editFolder,
  folderName,
  folderInfo,
  folderId,
}: Props) {
  return (
    <Modal onClick={modalHandleClick}>
      {(() => {
        if (modalTarget === "AddFolder") {
          return <AddFolder onChange={addFolder.onChange} value={addFolder.value} />;
        }
        if (modalTarget === "AddLinkToFolderFromInput") {
          return <AddLinkToFolder folderList={folderInfo}>{inputValue}</AddLinkToFolder>;
        }
        if (modalTarget === "AddLinkToFolderFromCard") {
          return <AddLinkToFolder folderList={folderInfo}>{targetURL}</AddLinkToFolder>;
        }
        if (modalTarget === "shareFolder") {
          return <Share folderId={folderId}>{folderName}</Share>;
        }
        if (modalTarget === "changeFolderName") {
          return <EditFolder onChange={editFolder.onChange} value={editFolder.value}></EditFolder>;
        }
        if (modalTarget === "deleteFolder") {
          return <DeleteFolder>{folderName}</DeleteFolder>;
        }
        if (modalTarget === "deleteLink") {
          return <DeleteLink>{targetURL}</DeleteLink>;
        }
      })()}
    </Modal>
  );
}

export default FolderModal;
