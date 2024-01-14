// sample api types (미사용)

export interface FolderDataVersion1 {
  id: number;
  user_id: number;
  name: string;
  created_at: string;
  link: {
    count: number;
  };
}

// export type FolderNameData = Omit<FolderData, "created_at">;

export interface LinkDataVersion1 {
  id: number;
  folder_id?: number;
  title: string;
  description: string;
  created_at?: string;
  updated_at?: string | null;
  image_source?: string;
  url: string;
}

export interface SharedFolderData {
  id: number;
  name: string;
  user_id: number;
  created_at: string;
}

export type SampleLinkData = Omit<
  LinkDataVersion1,
  "folder_id" | "updated_at" | "image_source" | "created_at"
> & {
  createdAt?: string;
  imageSource?: string;
};

export interface SampleFolderData {
  folder: {
    id: number;
    count: number;
    name: string;
    links: SampleLinkData[];
    owner: Owner;
  };
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}
