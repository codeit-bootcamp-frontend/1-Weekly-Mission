// https://bootcamp-api.codeit.kr/api/users/1/links?folderId=125
// https://bootcamp-api.codeit.kr/api/users/1/links 전체 폴더

import { useContext, useEffect, useState } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import useFetch from "../../hooks/useFetch";
import { getEachfoldersData } from "../../api/folder";

/*    
폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용해 주세요.
“전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
폴더 버튼을 클릭하면   폴더에 해당하는 링크들로 카드를 구성해 주세요. 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
*/
export default function LinksData() {
  const value = useContext(LocaleContext);
  const [result, setResult] = useState([]);
  // 폴더아이디들
  // 16번하과 40번만 데이터가 있고 나머지들은  없다
  // ['14', '16', '17', '24', '40', '168']
  const valueKeys = Object.keys(value);
  const obj = {};
  async function processFolder() {
    for (const itemKey of valueKeys) {
      const result = await getEachfoldersData({ folderId: itemKey });
      const [key, dataArr] = result;
      if (dataArr.data.length > 0) {
        obj[key] = true;
      } else {
        obj[key] = false;
      }
    }
    console.log(obj);
  }
  // processFolder();
}
