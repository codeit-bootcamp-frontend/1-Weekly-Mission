import { ReactNode } from "react";
import FolderPageCardItem from "./FolderPageCardItem";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "@/utils/utils";
import SharedPageCardItem from "./SharedPageCardItem";

interface CardListProps {
  type: "folder" | "shared";
  LinksData: FolderLink[] | undefined;
  folderListData?: UserFolders[];
}

function CardList({
  type,
  LinksData,
  folderListData,
}: CardListProps): ReactNode {
  return (
    LinksData &&
    LinksData.map((link) => {
      const { id, created_at, url, title, description, image_source } = link;

      const formattedCreatedAt = formatDate(created_at);
      const timeDiff = getTimeDiff(created_at);
      const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

      if (type === "folder" && folderListData) {
        return (
          <FolderPageCardItem
            key={url}
            folderListData={folderListData}
            formatTimeDiff={formatTimeDiff}
            formattedCreatedAt={formattedCreatedAt}
            url={url}
            title={title}
            description={description}
            imageSource={image_source}
          />
        );
      }
      if (type === "shared") {
        return (
          <SharedPageCardItem
            key={url}
            formatTimeDiff={formatTimeDiff}
            formattedCreatedAt={formattedCreatedAt}
            url={url}
            title={title}
            description={description}
            imageSource={image_source}
          />
        );
      }
    })
  );
}

export default CardList;
