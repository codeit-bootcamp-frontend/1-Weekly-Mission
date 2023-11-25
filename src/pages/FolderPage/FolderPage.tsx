import Layout from "../Layout/Layout";
import "./FolderPage.css";
import FolderViewer from "./components/FolderViewer/FolderViewer";
import { useState } from "react";
import AddFolderModal from "../../commons/modals/AddFolderModal/AddFolderModal";
import ModalLayout from "../../commons/modals/ModalLayout";

const INITMODAL = {
  isOpened: false,
  modalType: "",
  targetId: "",
  targetTitle: "",
};

function MobileFolderButton() {
  const [modalValues, setModalValues] = useState(INITMODAL);

  function handleModal(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    e.preventDefault();
    const newValue = {
      isOpened: true,
    };
    setModalValues((prev) => {
      return { ...prev, ...newValue };
    });
  }

  const closeModal = () => {
    setModalValues(() => {
      return { ...INITMODAL };
    });
  };
  return (
    <>
      {modalValues.isOpened && (
        <ModalLayout onClose={closeModal}>
          <AddFolderModal />
        </ModalLayout>
      )}
      <button
        id="addFolderButton"
        onClick={handleModal}
        className="mobild-float-button"
      >
        폴더 추가+
      </button>
    </>
  );
}

function FolderPage() {
  return (
    <Layout isSticky={false}>
      <MobileFolderButton />

      <FolderViewer />
    </Layout>
  );
}

export default FolderPage;
