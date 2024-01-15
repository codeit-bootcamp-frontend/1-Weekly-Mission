import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FolderLayout from "@/components/folder/FolderLayout";
import { getLinksId } from "@/lib/api/folder";
import QUERY_KEYS from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";

const FolderDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isAuth, setIsAuth] = useState(false);

  const { data: cardData, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.linksId, id],
    queryFn: () => getLinksId(Number(id)),
    enabled: !!isAuth && !!id,
  });

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/signin");
      return;
    }
    setIsAuth(true);
  }, [router]);

  return (
    <>
      {isSuccess && (
        <FolderLayout selectedFolderData={Number(id)} cardData={cardData} />
      )}
    </>
  );
};

export default FolderDetail;
