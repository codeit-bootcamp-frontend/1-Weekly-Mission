export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface UserData {
  data: User[];
}

export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}
