import './FolderAddButton.css';

function FolderAddButton({ onClick }) {
  return (
    <button className="folderAdd" onClick={onClick}>
      폴더 추가 +
    </button>
  );
}

export default FolderAddButton;
