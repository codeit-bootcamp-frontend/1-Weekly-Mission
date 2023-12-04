import { atom } from "recoil";

interface AddToFolderModalContent {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

interface Modal {
  [key: string]: any;
  defaultModal: {
    display: boolean;
    state: string;
    content: {
      id: number;
      title: string;
    };
  };
  addToFolderModal: {
    display: boolean;
    link: string;
    content: AddToFolderModalContent[];
  };
  shareFolderModal: {
    display: boolean;
    content: {
      id: number;
      title: string;
    };
  };
}

export const modalState = atom<Modal>({
  key: "modal",
  default: {
    defaultModal: {
      display: false,
      state: "",
      content: {
        id: -1,
        title: "",
      },
    },
    addToFolderModal: {
      display: false,
      link: "",
      content: [],
    },
    shareFolderModal: {
      display: false,
      content: {
        id: -1,
        title: "",
      },
    },
  },
});
