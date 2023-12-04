export interface User {
  id: number;
  auth_id?: string;
  name: string;
  email: string;
  image_source: string;
  created_at: string;
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}
