// Link
export type SampleLinkRawData = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

export type LinkRawData = {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  image_source: string;
  title: string;
  description: string;
  folder_id: number;
};

export type Link = {
  id: number;
  title: string;
  url: string;
  imageSource: string;
  alt: string;
  description: string;
  elapsedTime: string;
  createdAt: string;
};

// User
export type UserRawData = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
};

// Folder
export type SampleFolderRawData = {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: SampleLinkRawData[];
};

export type FolderRawData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

export type Folder = {
  id: number;
  createdAt: string;
  name: string;
  userId: number;
  linkCount: number;
};

export type SelectedFolderId = number | 'all';
