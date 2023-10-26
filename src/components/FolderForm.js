import './FolderForm.css';

function FolderForm({ data }) {
  const { name } = data;
  return (
    <>
      <button className="folder-name">{name}</button>
    </>
  );
}

export default FolderForm;
