/*FolderTagList 컴포넌트
  클릭하면 해당 folder의 CardList 컴포넌트를 보여주는 folder 이름 버튼 리스트.

  folders: 사용자의 전체 folderList 값을 가져옴.
  current: 현재 위치한 folder. current folder button은 클래스 이름으로 `clicked` 를 가짐.
  onClick: folder tag 버튼을 누를 때 발생하는 함수.
*/

import { FolderInterface } from "@/types";
import styles from "./FolderTagList.module.scss";

function FolderTag({
  folder,
  onClick,
  clicked = false,
}: {
  folder: FolderInterface;
  onClick: (folder: FolderInterface) => void;
  clicked?: boolean;
}) {
  const handleFolderTagButton = () => {
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
      onClick={handleFolderTagButton}
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
