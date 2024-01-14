import { Folders } from "@/types/server.type";

const getFolderName = (folderID: number = 0, folderLists: ({ id: number; name: string } | Folders)[]) => {
  if (folderID === 0) return "전체";

  const folderName = folderLists.find((folderList) => {
    return folderList.id === Number(folderID);
  });

  return folderName?.name as string;
};

export default getFolderName;
