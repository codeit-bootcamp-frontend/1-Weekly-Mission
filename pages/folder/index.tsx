import { useCallback, useEffect, useState } from "react";
import FolderLayout from "@/components/folder/FolderLayout";
import { GetLinkResponse, handleGetLinks } from "@/lib/api/folder";

const Folder = () => {
  const [cardData, setCardData] = useState<GetLinkResponse[]>([]);

  const handleLinks = useCallback(async () => {
    const res = await handleGetLinks({ id: null });
    setCardData(res);
  }, []);

  useEffect(() => {
    handleLinks();
  }, [handleLinks]);

  return <FolderLayout selectedFolderData={1} cardData={cardData} />;
};

export default Folder;
