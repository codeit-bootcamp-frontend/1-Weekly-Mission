import { useState } from "react";
import { makeModal } from "../components/Modal/modal";
import { FolderData } from "src/utils/getData.type";

interface Idispatch {
  (action: { title: string; type: string; data: FolderData[] }): void;
}

function useModal() {
  const [modal, setModal] = useState<React.ReactElement | null>(null);

  const dispatch: Idispatch = (action) => {
    const newModal = makeModal({ ...action, setModal });
    setModal(newModal);
  };

  return { modal, dispatch };
}

export default useModal;
