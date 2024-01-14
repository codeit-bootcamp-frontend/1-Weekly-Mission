export interface UserInfoProps {
  email: string;
  profileImageSource: string;
  image_source: string;
}

export interface User {
  id: number;
  created_at: string;
  name: string;
  email: string;
  profileImageSource: string;
  auth_id: string;
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
  favorite: boolean;
}

export interface Links {
  folder: Link[];
}

export interface Folder {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  user_id: number;
  link_count: number;
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
