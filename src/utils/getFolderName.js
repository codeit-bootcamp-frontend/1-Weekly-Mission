const getFolderName = (folderID, folderLists) => {
  if (!folderID) {
    return '전체';
  } else {
    const folderName = folderLists.find((folderList) => {
      return folderList.id === Number(folderID);
    });
    return folderName !== undefined ? folderName.name : '';
  }
};

export default getFolderName;
