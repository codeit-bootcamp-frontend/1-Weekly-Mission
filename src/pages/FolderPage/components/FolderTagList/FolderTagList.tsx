import styles from "./FolderTagList.module.scss";
import { FolderInterface } from "src/types";

interface FolderTagListProps {
  folders: FolderInterface[];
  current: FolderInterface;
  onClick: (folder: FolderInterface) => void;
}

interface FolderTagProps {
  folder: FolderInterface;
  onClick: (folder: FolderInterface) => void;
  clicked?: boolean;
}

function FolderTag({ folder, onClick, clicked = false }: FolderTagProps) {
  const handleClick = () => {
    if (folder) {
      onClick(folder);
    }
  };

  return (
    <button
      className={
        clicked
          ? `${styles["folder-name-button"]} ${styles["clicked"]}`
          : `${styles["folder-name-button"]}`
      }
      type="submit"
      onClick={handleClick}
    >
      {folder.name}
    </button>
  );
}
function FolderTagList({ folders, current, onClick }: FolderTagListProps) {
  return (
    <div className={styles["folder-tag-list"]}>
      <div className={styles["folder-tags-container"]}>
        {(folders as Array<FolderInterface>)?.map((folder: FolderInterface) => {
          if (current.id === folder.id) {
            return (
              <FolderTag
                folder={folder}
                key={folder.id}
                onClick={onClick}
                clicked={true}
              />
            );
          } else {
            return (
              <FolderTag folder={folder} key={folder.id} onClick={onClick} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FolderTagList;
