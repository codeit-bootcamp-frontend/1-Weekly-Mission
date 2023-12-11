import { mapLinksData } from "@/src/link/util-map";
import { DEFAULT_FOLDER_DATA } from "./constant";
import { SampleFolderRawData } from "@/src/folder/type";

export const mapFolderData = (folder?: SampleFolderRawData) => {
  if (!folder) return DEFAULT_FOLDER_DATA;

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource ?? "",
    ownerName: owner?.name ?? "",
    folderName: name ?? "",
    links: links?.map(mapLinksData) ?? [],
  };
};
