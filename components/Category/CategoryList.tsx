import { ReactNode, Dispatch, SetStateAction } from "react";

import styles from "./CategoryList.module.css";

import CategoryButton from "./CategoryButton";

interface Props {
  folderListData: UserFolderData;
  currentFolder: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

function CategoryList({ folderListData, currentFolder, children }: Props) {
  const folderListDataArray = folderListData?.data?.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.categoryList}>
      <ul className={styles.list}>
        <li>
          <CategoryButton id={"all"} currentFolder={currentFolder}>
            전체
          </CategoryButton>
        </li>
        {folderListDataArray?.map((item) => {
          if (item.id === 0) return null;

          return (
            <li key={item.id}>
              <CategoryButton id={item.id} currentFolder={currentFolder}>
                {item.name}
              </CategoryButton>
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
}

export default CategoryList;
