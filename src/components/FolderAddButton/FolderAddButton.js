import './FolderAddButton.css';

function FolderAddButton({ onClick }) {
  return (
    <button className="folderAdd" onClick={onClick} value="addFolder">
      폴더 추가 +
    </button>
  );
}

export default FolderAddButton;
