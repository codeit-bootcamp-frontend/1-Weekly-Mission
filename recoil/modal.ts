import { atom } from "recoil";

interface IAddToFolderModalContent {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

interface IModal {
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
    content: IAddToFolderModalContent[];
  };
  shareFolderModal: {
    display: boolean;
    content: {
      id: number;
      title: string;
    };
  };
}

export const modalState = atom<IModal>({
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
