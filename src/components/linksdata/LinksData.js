import React from "react";
import useFetch from "../../hooks/useFetch";
// https://bootcamp-api.codeit.kr/api/users/1/links?folderId=125
// https://bootcamp-api.codeit.kr/api/users/1/links 전체 폴더
/*    
폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용해 주세요.
“전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
폴더 버튼을 클릭하면   폴더에 해당하는 링크들로 카드를 구성해 주세요. 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
*/
export default function LinksData({ data, isLoading }) {
  const result = data?.data;
  const obj = {};
  let obj_keys = [];

  result &&
    result.forEach((item) => {
      obj[item.id] = {
        folderId: item.id,
        folderName: item.name,
      };
      obj_keys.push(item.id);
    });
}
