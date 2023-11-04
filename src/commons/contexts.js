import { createContext } from "react";

const INITIAL_MODAL = {
  // 모달이 열려있는 상태인가?
  isOpened: false,
  // 무슨 모달을 열 것인가? (edit 모달인지, delete 모달인지... )
  modalType: null,
  // 어느 폴더에서 열린 모달인가?
  targetId: null,
  targetTitle: "",
};

const ModalContext = createContext(INITIAL_MODAL);

export default ModalContext;
