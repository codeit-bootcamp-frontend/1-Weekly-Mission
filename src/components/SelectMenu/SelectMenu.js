import DeleteButton from './DeleteButton';
import FolderAddButton from './FolderAddButton';
import './SelectMenu.css';

function SelectMenu() {
  return (
    <div className="select-menu">
      <DeleteButton />
      <FolderAddButton />
    </div>
  );
}

export default SelectMenu;
