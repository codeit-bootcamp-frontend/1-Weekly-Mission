import "./FolderButton.style.css";

function FolderButton({ onChange, value }) {
  const handleButtonClick = (e) => {
    onChange(value);
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="folder-name-button"
    >
      {value}
    </button>
  );
}

export default FolderButton;
