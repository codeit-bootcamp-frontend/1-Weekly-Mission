import { useState, useEffect } from "react";
import { getFolderLinks, getFolderCategory } from "../utils/api";
import CategoryItem from "./CategoryItem";

function Category({ folderData, handleClick }) {
  const temp = { id: "", name: "전체" };
  return (
    <div>
      <ul>
        <CategoryItem data={temp} handleClick={handleClick} />

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
      </ul>
    </div>
  );
}
// TODO : fetch(폴더 데이터)
// TODO : 카테고리 아이템 컴포넌트 만들기(map -> 배열:  가져온 폴더데이터로)

export default Category;
