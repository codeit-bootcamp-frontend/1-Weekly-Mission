import CategoryItem from "./CategoryItem";
import FolderAddBtn from "./FolderAddBtn";
import "./Category.css";
import ShowFolderName from "./ShowFolderName";
import { useEffect, useState } from "react";

function Category({ folderData, handleClick }) {
  const MAIN_CATEGORY = { id: "", name: "전체" };

  return (
    <nav className="category-nav">
      <ul className="category-box">
        <div className="category-item-box">
          <CategoryItem data={MAIN_CATEGORY} handleClick={handleClick} />

          {folderData?.length &&
            folderData.map((item) => {
              return (
                <CategoryItem
                  data={item}
                  key={item.id}
                  handleClick={handleClick}
                />
              );
            })}
        </div>

        <FolderAddBtn />
      </ul>
    </nav>
  );
}
// TODO : fetch(폴더 데이터)
// TODO : 카테고리 아이템 컴포넌트 만들기(map -> 배열:  가져온 폴더데이터로)

export default Category;
