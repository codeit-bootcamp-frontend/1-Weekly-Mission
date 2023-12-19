import { useCallback, useEffect, useState } from "react";
import FolderLayout from "@/components/folder/FolderLayout";
import { GetLinkResponse, handleGetLinks } from "@/lib/api/folder";
import { useRouter } from "next/router";

const Folder = () => {
  const router = useRouter();
  const [cardData, setCardData] = useState<GetLinkResponse[]>([]);
  const [isAccessToken, setIsAccessToken] = useState(false);

  const handleLinks = useCallback(async () => {
    const res = await handleGetLinks({ id: null });
    setCardData(res);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/signin");
      return;
    }
    setIsAccessToken(true);
    handleLinks();
  }, [handleLinks, router]);

  return (
    <>
      {isAccessToken && (
        <FolderLayout selectedFolderData={1} cardData={cardData} />
      )}
    </>
  );
};

export default Folder;
