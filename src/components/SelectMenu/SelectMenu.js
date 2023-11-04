import DeleteButton from './DeleteButton';
import FolderAddButton from './FolderAddButton';
import './SelectMenu.css';

function SelectMenu({ onClick, url }) {
  return (
    <div className="select-menu">
      <DeleteButton onClick={onClick} url={url} />
      <FolderAddButton onClick={onClick} />
    </div>
  );
}

export default SelectMenu;
