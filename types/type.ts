export interface UserInfoProps {
  email: string;
  profileImageSource: string;
  image_source: string;
}

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface SampleLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface SampleFolder {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    link: {
      count: number;
    };
    links: SampleLink[];
    count: number;
  };
}

export interface Link {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export interface Links {
  data: Link[];
}

export interface Folder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  link: {
    count: number;
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

export interface Folders {
  data: Folder[];
}

export interface MappedFolder {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: MappedLink[];
}

export interface MappedLink {
  id: number;
  url: string;
  title: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  createdAt: string;
  description: string;
}
