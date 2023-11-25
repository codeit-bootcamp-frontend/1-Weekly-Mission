type Folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

const getFolderName = (folderID: string, folderLists: Folder[]) => {
  if (!folderID) {
    return "전체";
  } else {
    const folderName = folderLists.find((folderList) => {
      return folderList.id === Number(folderID);
    });
    return folderName !== undefined ? folderName.name : "";
  }
};

export default getFolderName;
