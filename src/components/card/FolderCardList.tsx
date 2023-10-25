import FolderCard from "components/card/FolderCard";

interface Props {
  data?: Folder;
}

function FolderCardList({ data }: Props) {
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
