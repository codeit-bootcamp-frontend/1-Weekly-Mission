import AddLinktoFolderModal from "../AddLinktoFolderModal";

function AddLinktoFolderModalContainer({ onShow, folders, link }) {
  if (!folders) {
    return;
  }

  const handleCloseButton = () => {
    onShow(false, "");
  };

  return (
    <>
      <AddLinktoFolderModal
        folders={folders}
        onClose={handleCloseButton}
        link={link}
      />
    </>
  );
}

export default AddLinktoFolderModalContainer;
