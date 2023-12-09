import styles from "./FolderTagList.module.scss";
import { FolderInterface } from "@/types";

function FolderTag({
  folder,
  onClick,
  clicked = false,
}: {
  folder: FolderInterface;
  onClick: (folder: FolderInterface) => void;
  clicked?: boolean;
}) {
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
function FolderTagList({
  folders,
  current,
  onClick,
}: {
  folders: FolderInterface[];
  current: FolderInterface;
  onClick: (folder: FolderInterface) => void;
}) {
  return (
    <div className={styles["folder-tag-list"]}>
      <div className={styles["folder-tags-container"]}>
        {folders?.map((folder) => {
          return (
            <FolderTag
              folder={folder}
              key={folder.id}
              onClick={onClick}
              clicked={current.id === folder.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FolderTagList;
