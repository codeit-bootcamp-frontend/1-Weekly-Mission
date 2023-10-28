import "./FolderButton.style.css";

function FolderButton({ folder, onChange }) {
  const { id, name } = folder;

  const handleButtonClick = (e) => {
    onChange(name, id);
    e.target.className = "folder-name-button clicked-folder-button";
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="folder-name-button"
    >
      {name}
    </button>
  );
}

export default FolderButton;
