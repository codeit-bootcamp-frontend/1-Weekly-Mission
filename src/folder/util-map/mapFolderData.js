import { mapLinksData } from "link/util-map";

export const mapFolderData = (folder) => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
