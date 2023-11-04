import Layout from "commons/components/Layout/Layout";
import { SearchBar } from "commons/components/index";
import { LinkAddBar } from "./components/index";
import "./FolderPage.css";
import FolderViewer from "./components/FolderViewer/FolderViewer";
import { useState } from "react";
import AddFolderModal from "commons/modals/AddFolderModal/AddFolderModal";
import ModalLayout from "commons/modals/ModalLayout";

const INITMODAL = {
  isOpened: false,
  modalType: "",
  targetId: "",
  targetTitle: "",
};

function MobileFolderButton() {
  const [modalValues, setModalValues] = useState(INITMODAL);

  const handleModal = (e) => {
    e.preventDefault();
    const newValue = {
      isOpened: true,
    };
    setModalValues((prev) => {
      return { ...prev, ...newValue };
    });
  };

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
