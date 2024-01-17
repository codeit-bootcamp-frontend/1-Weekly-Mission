export interface UserType {
  id: number;
  created_at: string;
  name: string | null;
  image_source: string | null;
  email: string;
}

export type UserInfoStoreType = {
  userInfo: UserType | null;
  addUser: (user: UserType) => void;
  deleteUser: () => void;
};
