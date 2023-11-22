import { mapLinksData } from "link/util-map";

interface Folder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
}

interface MappedFolder {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: MappedLink[];
}

export interface MappedLink {
  id: number;
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  createdAt: string;
  description: string;
}

export const mapFolderData = (folder: Folder): MappedFolder => {
  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData),
  };
};
