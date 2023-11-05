import { atom } from "recoil";

export const modalState = atom({
  key: "mdal",
  default: {
    defaultModal: {
      display: false,
    },
    addToFolderModal: {
      display: false,
      link: "",
    },
  },
});
