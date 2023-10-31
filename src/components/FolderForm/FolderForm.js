import './FolderForm.css';

function FolderForm({ name, onClick }) {
  return (
    <button className="folder-name" onClick={onClick}>
      {name}
    </button>
  );
}

export default FolderForm;
