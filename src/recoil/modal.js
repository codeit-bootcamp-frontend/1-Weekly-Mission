import { atom } from "recoil";

export const modalState = atom({
  key: "mdal",
  default: {
    defaultModal: {
      display: false,
      state: "",
      content: "",
    },
    addToFolderModal: {
      display: false,
      link: "",
    },
  },
});
