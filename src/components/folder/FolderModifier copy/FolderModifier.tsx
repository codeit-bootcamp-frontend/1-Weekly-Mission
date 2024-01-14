/*FolderModifier 컴포넌트:
  각 folder의 수정, 삭제, 공유 버튼 컴포넌트로, 전체 폴더에선 렌더링되지 않음.
*/

import Image from "next/image";

import styles from "./FolderModifier.module.scss";

function FolderTitle({ title }: { title: string }) {
  return <h1 className={styles["folder-title"]}>{title}</h1>;
}

function FolderModifier({ folderId = "", folderTitle = "" }) {
  return (
    <div className={styles["modifier-container"]}>
      <FolderTitle title={folderTitle} />
      <div>
        <div className={styles["button-modifier"]}>
          <button>
            <Image
              src="/icons/share-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            공유
          </button>
          <button>
            <Image
              src="/icons/rename-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            이름 변경
          </button>
          <button>
            <Image
              src="/icons/delete-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default FolderModifier;
