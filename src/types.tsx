export interface SharedLinkInfo {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

export interface SharedFolderInfo {
  id: number;
  folderTitle: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: SharedLinkInfo[];
  count: number;
}

export interface SelectedFolderInfo {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface SelectedFolderContentsInfo {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
}

export interface AccountInfo {
  email: string;
  image_source: string;
}
