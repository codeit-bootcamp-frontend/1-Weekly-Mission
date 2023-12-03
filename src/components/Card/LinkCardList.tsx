import FolderCard from "src/components/Card/FolderCard";
import useGetFolder from "src/hooks/getFolder";

function LinkCardList() {
  const { allLinkList } = useGetFolder();

  return (
    <>
      {allLinkList?.data.map((item) => (
        <FolderCard
          key={item.id}
          url={item.url}
          description={item.description}
          createdAt={item.created_at}
          imageSource={item.image_source}
        />
      ))}
    </>
  );
}

export default LinkCardList;
