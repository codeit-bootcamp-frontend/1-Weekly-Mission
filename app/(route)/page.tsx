"use client";

import ChangeFolderNameModal from "@/components/modals/ChangeFolderNameModal";
import useModal from "@/hooks/useModal";

const Home = () => {
  const [openModal, closeModal] = useModal();

  const openTest = () => {
    openModal(<ChangeFolderNameModal folderId={283} folderName="유용한 팁" />);
  };

  return (
    <div>
      <button onClick={openTest}>OPEN MODAL</button>
    </div>
  );
};

export default Home;
