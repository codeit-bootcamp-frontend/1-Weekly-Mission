export interface Link {
  id: number;
  title: string;
  url: string;
  createdAt?: string;
  created_at?: string;
  description: string;
  imageSource?: string;
  image_source?: string;
  folder_id?: number;
  updated_at?: string | null;
}

export interface SharedFolder {
  folder: {
    id: number;
    name: string;
    count: number;
    links: Link[];
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
  };
}

export interface Folder {
  id: number;
  name: string;
  created_at?: string;
  user_id?: number;
  link?: {
    count: number;
  };
}
