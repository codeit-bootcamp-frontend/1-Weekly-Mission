import "./FolderButton.style.css";

function FolderButton({ folder, onChange }) {
  const { id, name } = folder;

  const handleButtonClick = () => {
    onChange(name, id);
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
