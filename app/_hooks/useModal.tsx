"use client";

import { useContext } from "react";
import { ModalContext } from "@/components/Providers";

const useModal = () => {
  const { modal, setModal } = useContext(ModalContext);

  const openModal = (modal: JSX.Element) => {
    setModal(modal);
  };

  const closeModal = () => {
    setModal(null);
  };

  return [openModal, closeModal];
};

export default useModal;
