import { useQuery } from "@tanstack/react-query";
import FolderCard from "components/card/FolderCard";
import QUERY_KEYS from "constants/queryKeys";
import getUserFolder from "libs/apis/getUserFolder";
import manageStatus from "utils/manageStatus";

function FolderCardList() {
  const { isLoading, isError, data } = useQuery<Folder>({
    queryKey: [QUERY_KEYS.sample.folder],
    queryFn: getUserFolder,
  });

  if (isLoading || isError) {
    return manageStatus({ isLoading, isError });
  }
  return (
    <>
      {data?.folder.links.map((item) => (
        <FolderCard
          key={item.id}
          url={item.url}
          description={item.description}
          createdAt={item.createdAt}
          imageSource={item.imageSource}
        />
      ))}
    </>
  );
}

export default FolderCardList;
