import { create } from "zustand";

type ModalStoreState = {
  isModalOpen: boolean;
  modalName: string;
  showModal: (name: string) => void;
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
