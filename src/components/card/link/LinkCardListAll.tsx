import FolderCard from "components/card/FolderCard";
import useGetLinkAll from "hooks/getLinkAll";

function LinkCardListAll() {
  const { allLinkList } = useGetLinkAll();

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

export default LinkCardListAll;
