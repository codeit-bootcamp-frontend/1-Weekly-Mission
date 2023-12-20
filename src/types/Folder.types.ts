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

export interface Folder {
  id: number;
  name: string;
  created_at?: string;
  user_id?: number;
  link?: {
    count: number;
  };
}

export interface User {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}
