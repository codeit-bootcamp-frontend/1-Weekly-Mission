import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FolderLayout from "@/components/folder/FolderLayout";
import { GetLinkResponse, handleGetLinks } from "@/lib/api/folder";

const FolderDetail = () => {
  const router = useRouter();
  const [cardData, setCardData] = useState<GetLinkResponse[]>([]);
  const { id } = router.query;

  const handleLinks = useCallback(async () => {
    const res = await handleGetLinks({ id: Number(id) });
    setCardData(res);
  }, [id]);

  useEffect(() => {
    handleLinks();
  }, [handleLinks]);

  return <FolderLayout selectedFolderData={Number(id)} cardData={cardData} />;
};

export default FolderDetail;
