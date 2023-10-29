import FolderCard from "components/card/FolderCard";
import useGetFolderById from "hooks/getFolderById";

interface Props {
  folderId?: number;
}

function LinkCardList({ folderId }: Props) {
  const { folderById } = useGetFolderById({ folderId: folderId });

  return (
    <>
      {folderById?.map((item) => (
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
