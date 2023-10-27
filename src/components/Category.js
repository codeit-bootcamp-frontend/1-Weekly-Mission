import { useState, useEffect } from "react";
import { getFolderData, getFolderLinks, getFolderCategory } from "../utils/api";
import CategoryItem from "./CategoryItem";

function Category() {
  const [folderId, setFolderId] = useState();
  const [folderData, setFolderData] = useState([]);

  // async function handleCategory() {
  //   const { data } = await getFolderData();
  //   const { data: folderLinksArr } = await getFolderLinks(folderId);

  //   const folderIdArr = data?.map((item) => item.id);
  //   const folderNameArr = data?.map((item) => item.name);

  //   setFolderId(folderIdArr);
  //   setFolderName(folderNameArr);

  //   const folderLinksId = folderLinksArr?.map(
  //     (folderLink, idx) => folderLink[idx]
  //   );
  //   console.log(folderLinksId);

  //   // console.log(data);
  // }

  async function getFolderData() {
    const { data } = await getFolderCategory();
    setFolderData(data);
    console.log(data);
  }

  useEffect(() => {
    getFolderData();
  }, []);

  function handleClick(folderId) {
    console.log(folderId);
  }

  return (
    <div>
      <ul>
        <li>
          <a href="/">전체</a>
        </li>
        {folderData?.map((item) => {
          return (
            <CategoryItem data={item} key={item.id} handleClick={handleClick} />
          );
        })}
      </ul>
    </div>
  );
}
// TODO : fetch(폴더 데이터)
// TODO : 카테고리 아이템 컴포넌트 만들기(map -> 배열:  가져온 폴더데이터로)

export default Category;
