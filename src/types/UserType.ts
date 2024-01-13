export interface UserType {
  id: number;
  name: string;
  image_source: string | null;
  email: string;
}

export type UserInfoStoreType = {
  userInfo: UserType | null;
  addUser: (user: UserType) => void;
  deleteUser: () => void;
};
