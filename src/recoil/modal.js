import { atom } from "recoil";

export const modalState = atom({
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
