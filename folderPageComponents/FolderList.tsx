import { useState } from "react";
import FolderListItem from "./FolderListItem";

interface Link {
  count: number;
}

interface SingleData {
  created_at: string;
  id: number;
  link: Link;
  name: string;
  user_id: number;
}

interface Data {
  data: SingleData[];
}

interface Props {
  fullData: Data;
  handleFolderClick: (folderId: unknown, folderName: string) => void;
  isTotalClicked: boolean;
}

const FolderList = ({ fullData, handleFolderClick, isTotalClicked }: Props) => {
  const [selectedFolder, setSelectedFolder] = useState<number>();

  const handleButtonClick = (id: number) => {
    setSelectedFolder(id);
  };

  return (
    <>
      {fullData &&
        fullData?.data?.map((data) => (
          <FolderListItem
            key={data?.id}
            data={data}
            handleFolderClick={handleFolderClick}
            isSelected={selectedFolder === data?.id}
            handleButtonClick={handleButtonClick}
            isTotalClicked={isTotalClicked}
          />
        ))}
    </>
  );
};

export default FolderList;
