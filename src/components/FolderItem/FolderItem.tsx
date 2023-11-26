import "./FolderItem.css";

interface FolderItemProps {
  id: number;
  name: string;
  onFolderClick: (id: number) => void;
}

const FolderItem = ({ id, name, onFolderClick }: FolderItemProps) => (
  <div className="folder-item" onClick={() => onFolderClick(id)}>
    {name}
  </div>
);

export default FolderItem;
