import { getUserFolder } from "pages/api/api";
import { useEffect, useState } from "react";

type Return = {
  folders: any[];
  folderName: string;
  isFunctionButtonShow: boolean;
};

export const useFolderName = (initFolderId: string): Return => {
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("");
  const [isFunctionButtonShow, setIsFunctionButtonShow] = useState(false);

  const folderInfo = async (folderId: string) => {
    const introResult = await getUserFolder();

    const currentId = introResult.filter(
      (data: { id: number }) => data.id === Number(folderId)
    );

    let folderName;
    if (currentId.length === 0) {
      folderName = "전체";
      setIsFunctionButtonShow(false);
    } else {
      folderName = currentId[0].name;
      setIsFunctionButtonShow(true);
    }

    setFolderName(folderName);
    setFolders(introResult);
  };

  useEffect(() => {
    folderInfo(initFolderId);
  }, [initFolderId]);

  return { folderName, folders, isFunctionButtonShow };
};
