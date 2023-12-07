import { FolderInfo } from "@/API/getCurrentUsersFolderData";

const getFolderName = (folderID: string | string[] | undefined, folderLists: FolderInfo[]) => {
  if (!folderID || folderID === "0") {
    return "전체";
  } else {
    const folderName = folderLists.find((folderList) => {
      return folderList.id === Number(folderID);
    });
    return folderName !== undefined ? folderName.name : "";
  }
};

export default getFolderName;
