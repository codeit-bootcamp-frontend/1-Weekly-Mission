export interface AuthType {
  email: string;
  password: string;
}

export interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export interface FolderType {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  link_count?: number;
}

export interface LinkType {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

export interface UserType {
  id: number;
  name: string;
  image_source: string;
  email: string;
}
