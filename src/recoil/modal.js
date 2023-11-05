import { atom } from "recoil";

export const modalState = atom({
  key: "mdal",
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
