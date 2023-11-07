import { useState } from "react";
import { makeModal } from "../utils/modal";

function useModal(initial) {
  const [modal, setModal] = useState(initial);

  const dispatch = (action) => {
    const newModal = makeModal({ ...action, setModal });
    setModal(newModal);
  }

  return [modal, dispatch]
}

export default useModal