import { ReactNode, Dispatch, SetStateAction } from "react";

import styles from "./CategoryList.module.css";

import CategoryButton from "./CategoryButton";

interface Props {
  folderListData?: UserFolders[];
  onClick: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

function CategoryList({ folderListData, onClick, children }: Props) {
  const folderListDataArray = folderListData?.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.categoryList}>
      <ul className={styles.list}>
        <li>
          <CategoryButton id={"all"} onClick={onClick}>
            전체
          </CategoryButton>
        </li>
        {folderListDataArray?.map((item) => {
          if (item.id === 0) return null;

          return (
            <li key={item.id}>
              <CategoryButton id={item.id} onClick={onClick}>
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
