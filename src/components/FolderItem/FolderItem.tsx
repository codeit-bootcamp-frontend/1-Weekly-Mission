import styles from "./FolderItem.module.css";

interface FolderItemProps {
  id: number;
  name: string;
  onFolderClick: (id: number) => void;
}

const FolderItem = ({ id, name, onFolderClick }: FolderItemProps) => (
  <div className={styles.folderItem} onClick={() => onFolderClick(id)}>
    {name}
  </div>
);

export default FolderItem;
