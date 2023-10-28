import { useNavigate } from 'react-router-dom';
import './FolderForm.css';

function FolderForm({ name, href }) {
  const navigate = useNavigate();

  const handleFolderButton = () => {
    navigate(href);
  };

  return (
    <>
      <button className="folder-name" onClick={handleFolderButton}>
        {name}
      </button>
    </>
  );
}

export default FolderForm;
