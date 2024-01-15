import { useEffect, useState } from "react";
import FolderLayout from "@/components/folder/FolderLayout";
import { getLinks } from "@/lib/api/folder";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "@/constants/queryKey";

const Folder = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  const { data: cardData, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.links],
    queryFn: () => getLinks(),
    enabled: !!isAuth,
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
      {isSuccess && <FolderLayout selectedFolderData={1} cardData={cardData} />}
    </>
  );
};

export default Folder;
