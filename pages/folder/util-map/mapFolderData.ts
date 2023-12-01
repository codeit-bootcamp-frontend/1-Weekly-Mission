import { mapLinksData } from "@/pages/link/util-map/mapLinksData";
import { DEFAULT_FOLDER_DATA } from "./constant";
import { SampleFolderRawData } from "../type";

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
