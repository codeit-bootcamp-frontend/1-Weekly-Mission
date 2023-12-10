import { useState } from "react";
import { DEFAULT_FOLDER, DEFAULT_USER_ID } from "@/constants/constant";
import { useEffect } from "react";
import { FolderItem, UserLinksItem } from "@/types/api";
import { useRouter } from "next/router";
import useSearchbar from "./useSearchbar";
import useSearchParam from "./useSearchParam";

interface userFolderProps {
  userFolders: FolderItem[];
  initialUserLinks: UserLinksItem[];
}

/** FolderContainer에서 사용하는 custom Hook */
const useFolder = ({ initialUserLinks, userFolders }: userFolderProps) => {
  const [selectedFolderName, setSelectedFolderName] = useState<string>(
    DEFAULT_FOLDER.name
  );
  const router = useRouter();
  const { id: currentFolderId } = router.query;
  const [cards, setCards] = useState<UserLinksItem[]>(initialUserLinks);
  const [showCards, setShowCards] = useState<UserLinksItem[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const { handleSearchParam } = useSearchParam({
    currentFolderId,
    setShowCards,
    setSelectedFolderName,
    DEFAULT_USER_ID,
    userFolders,
  });

  const { handleSearchbar } = useSearchbar({
    cards,
    setSearchText,
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
