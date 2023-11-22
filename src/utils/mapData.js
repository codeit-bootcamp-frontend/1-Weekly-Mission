import { fetchFolderLinks } from "../api/users";

const USER_ID = 1;

export const mapFolderData = (arr) => {
  const arrCopy = arr?.slice();
  // id가 null 이나 undefined이 이면은 Links를 가져오기 위해전체 데이터를 따로? 만들어야 하는데
  // 0이면은 불러와진당 싱기방기
  arrCopy.push({ id: 0, name: "전체" });
  const mapObj =
    arrCopy &&
    arrCopy.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = {
          folderId: item.id,
          folderName: item.name,
        };
      }
      return acc;
    }, {});
  return mapObj;
};

export const mapLinksData = async (arr) => {
  const obj = mapFolderData(arr) || {};
  const obj_data = Object.values(obj);

  const copy = obj_data.slice();

  const mappedData = await Promise.all(
    copy?.map(async (obj) => {
      const { folderId } = obj;
      obj.folderId = obj.folderId === 0 ? "" : obj.folderId;
      const result = await fetchFolderLinks({
        userId: USER_ID,
        folderId: folderId,
      });
      const [_, array] = result;

      obj["linksdata"] = array;
      return obj;
    })
  );

  return mappedData;
};
