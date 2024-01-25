/* 모달 관리를 위한 전역 상태관리 */

import { create } from "zustand";

type ModalStoreState = {
  // isModalOpen: 모달이 열려있다면 true, 아니라면 false인 값
  isModalOpen: boolean;
  // modalName: 어떤 모달이 열려있는지 확인하기 위한 값
  modalName: string;
  // showModal: 모달을 여는 메소드
  showModal: (name: string) => void;
  // hideModal: 모달을 닫는 메소드
  hideModal: () => void;
};

export const useModalStore = create<ModalStoreState>()((set) => ({
  isModalOpen: false,
  modalName: "",

  showModal: (name: string) => {
    set((state) => ({
      modalName: name,
      isModalOpen: !state.isModalOpen,
    }));
  },

  hideModal: () => {
    set(() => ({
      isModalOpen: false,
    }));
  },
}));
