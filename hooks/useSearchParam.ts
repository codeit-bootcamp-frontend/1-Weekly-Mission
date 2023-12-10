import { fetchUserLinks } from "@/api/userLinks.api";
import { DEFAULT_FOLDER } from "@/constants/constant";
import { FolderItem, UserLinksItem } from "@/types/api";

interface useSearchParamProps {
  currentFolderId: string | string[] | undefined;
  setShowCards: (value: UserLinksItem[]) => void;
  setSelectedFolderName: (value: string) => void;
  DEFAULT_USER_ID: number;
  userFolders: FolderItem[];
}

const useSearchParam = ({
  currentFolderId,
  setShowCards,
  setSelectedFolderName,
  DEFAULT_USER_ID,
  userFolders,
}: useSearchParamProps) => {
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

  return { handleSearchParam };
};
export default useSearchParam;
