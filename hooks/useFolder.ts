import { useState } from "react";
import { fetchGet } from "@/api/api";
import { DEFAULT_FOLDER, DEFAULT_USER_ID } from "@/constants/constant";
import { useEffect } from "react";
import { FolderItem, UserLinksItem } from "@/types/api";
import { useRouter } from "next/router";
import { fetchUserLinks } from "@/api/userLinks.api";

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

  /** Query의 FolderId를 추적하여 카드 데이터를 보여주는 함수 */
  const handleSearchParam = async () => {
    if (currentFolderId === null || currentFolderId === "") {
      setSelectedFolderName(DEFAULT_FOLDER.name);
      const fetchedData = await fetchUserLinks({
        userId: DEFAULT_USER_ID,
        folderId: "",
      });
      setShowCards(fetchedData.data);
    } else {
      const fetchedData = await fetchUserLinks({
        userId: DEFAULT_USER_ID,
        folderId: currentFolderId,
      });
      setShowCards(fetchedData.data);
      const selectedFolder: FolderItem | undefined = userFolders.find(
        (folder: { id: number }) => String(folder.id) === currentFolderId
      );
      if (selectedFolder === undefined) setSelectedFolderName("");
      else setSelectedFolderName(selectedFolder.name);
    }
  };

  /** 검색창에서 검색을 통한 카드 데이터를 보여주는 함수 */
  const handleSearchbar = async (searchedText: string) => {
    setSearchText(searchedText);
    if (searchedText.length > 0) {
      setShowCards(
        cards.filter(
          (link: { description: string; url: string; title: string }) => {
            return (
              link["description"]?.includes(searchedText) ||
              link["url"]?.includes(searchedText) ||
              link["title"]?.includes(searchedText)
            );
          }
        )
      );
    } else {
      const query = `/api/users/${DEFAULT_USER_ID}/links`;
      const fetchedData = await fetchGet(query);
      setShowCards(fetchedData.data);
    }
  };

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
