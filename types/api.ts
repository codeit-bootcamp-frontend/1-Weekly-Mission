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

export interface SigninItem {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface SignupItem {
  accessToken: string;
  refreshToken: string;
}

export interface CheckEmailItem {
  isUsableNickname: boolean;
}

export interface UserInfo {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
