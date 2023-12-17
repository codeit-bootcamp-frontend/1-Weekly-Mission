import { useState } from "react";
import { DEFAULT_FOLDER } from "@/constants/constant";
import { useEffect } from "react";
import { FolderItem, UserLinksItem } from "@/types/api";
import { useRouter } from "next/router";
import useSearchbar from "./useSearchbar";
import useSearchParam from "./useSearchParam";

interface userFolderProps {
  userFolders: FolderItem[];
  initialUserLinks: UserLinksItem[];
  DEFAULT_USER_ID: number;
}

/** FolderContainer에서 사용하는 custom Hook */
const useFolder = ({
  initialUserLinks,
  userFolders,
  DEFAULT_USER_ID,
}: userFolderProps) => {
  const [selectedFolderName, setSelectedFolderName] = useState(
    DEFAULT_FOLDER.name
  );
  const router = useRouter();
  const { id: currentFolderId } = router.query;
  const [showCards, setShowCards] = useState<UserLinksItem[]>([]);

  const { handleSearchParam } = useSearchParam({
    currentFolderId,
    setShowCards,
    setSelectedFolderName,
    DEFAULT_USER_ID,
    userFolders,
  });

  const { handleSearchbar, searchText } = useSearchbar({
    initialUserLinks,
    setShowCards,
    DEFAULT_USER_ID,
  });

  useEffect(() => {
    handleSearchParam();
  }, [currentFolderId]);

  return {
    showCards,
    searchText,
    currentFolderId,
    selectedFolderName,
    handleSearchbar,
  };
};

export default useFolder;
