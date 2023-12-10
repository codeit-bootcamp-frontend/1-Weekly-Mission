import { atom } from "recoil";

interface Modal {
  [key: string]: any;
  addToFolderModal: {
    display: boolean;
  };
  shareFolderModal: {
    display: boolean;
  };
  deleteModal: {
    display: boolean;
  };
  enterModal: {
    display: boolean;
  };
}

export const modalState = atom<Modal>({
  key: "modal",
  default: {
    addToFolderModal: {
      display: false,
    },
    shareFolderModal: {
      display: false,
    },
    deleteModal: {
      display: false,
    },
    enterModal: {
      display: false,
    },
  },
});
