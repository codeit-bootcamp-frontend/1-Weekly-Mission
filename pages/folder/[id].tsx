import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FolderLayout from "@/components/folder/FolderLayout";
import { GetLinkResponse, handleGetLinks } from "@/lib/api/folder";

const FolderDetail = () => {
  const router = useRouter();
  const [cardData, setCardData] = useState<GetLinkResponse[]>([]);
  const { id } = router.query;
  const [isAccessToken, setIsAccessToken] = useState(false);

  const handleLinks = useCallback(async () => {
    const res = await handleGetLinks({ id: Number(id) });
    setCardData(res);
  }, [id]);

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
        <FolderLayout selectedFolderData={Number(id)} cardData={cardData} />
      )}
    </>
  );
};

export default FolderDetail;
