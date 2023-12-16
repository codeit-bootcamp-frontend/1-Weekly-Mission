import { UserFolder, fetchFolderLinks } from "@/api/folder";
import { MappedDataProps } from "@/types/mappedFolderTypes";

type accCopyReduceType = {
  [key: number]: MappedDataProps;
};

const USER_ID = 1;

export const mapFolderData = (arr: UserFolder[]) => {
  const arrCopy = arr?.slice();

  arrCopy.push({ id: 0, name: "전체" });
  const mapObj =
    arrCopy &&
    arrCopy.reduce<accCopyReduceType>((acc, item) => {
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

export const mapLinksData = async (arr: UserFolder[]) => {
  const obj = mapFolderData(arr) || {};
  const obj_data = Object.values(obj);

  const copy = obj_data.slice();

  const mappedData = await Promise.all(
    copy?.map(async (obj) => {
      const { folderId } = obj;
      obj.folderId = obj.folderId === 0 ? "" : obj.folderId;
      const jsonData = await fetchFolderLinks({
        userId: USER_ID,
        folderId: folderId,
      });

      const result = jsonData?.data;
      obj["linksdata"] = result;
      return obj;
    })
  );

  return mappedData;
};
