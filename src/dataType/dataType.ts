export interface User {
  id: number;
  created_at: string;
  name?: string;
  image_source?: string;
  email?: string;
  auth_id: string;
}

export interface Links {
  created_at: string;
  description?: string | null;
  folder_id?: number | null;
  id?: number;
  image_source?: string | null;
  title?: string | null;
  updated_at?: string | null;
  url?: string;
}

export interface folders {
  created_at: string;
  id: string;
  link: { count: number };
  name: string;
  user_id: number;
}

export interface folderOptionType {
  title: string;
  btnName: string;
  dataItem: string | null;
  share: { id: number; folderId?: string | null };
  folderData: { data: folders[] };
}
