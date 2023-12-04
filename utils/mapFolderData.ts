import { Folder, MappedFolder } from "@/types/type";
import mapLinksData from "./mapLinksData";

const mapFolderData = (folder: Folder): MappedFolder => {
  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData),
  };
};

export default mapFolderData;
