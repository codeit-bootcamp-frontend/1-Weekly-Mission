import { useState } from "react";
import { makeModal } from "../components/Modal/modal";
import { FolderData } from "src/utils/getData.type";
import ModalPortal from "../components/Modal/ModalPortal";

interface Idispatch {
  (action: { title?: string; type?: string; data?: FolderData[] }): void;
}

function useModal() {
  const [modal, setModal] = useState<React.ReactElement | null>(null);

  const dispatch: Idispatch = (action) => {
    const newModal = makeModal({ ...action, setModal });
    setModal(<ModalPortal>{newModal}</ModalPortal>);
  };

  return { modal, dispatch };
}

export default useModal;
