import "./FolderButton.style.css";

function FolderButton({ children }) {
  return (
    <button type="button" className="folder-name-button">
      {children ? children : "이름 없음"}
    </button>
  );
}

export default FolderButton;
