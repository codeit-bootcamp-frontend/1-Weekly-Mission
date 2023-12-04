export interface SampleFolderItem {
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

export interface UserProfileSampleItem {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface FolderItem {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface UserProfileItem {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface UserLinksItem {
  id: number;
  createdAt?: string;
  created_at?: string;
  updated_at?: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  image_source?: string;
  folder_id?: number;
}
