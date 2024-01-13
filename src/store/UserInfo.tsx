import { create } from "zustand";

import { UserType, UserInfoStoreType } from "@/types/UserType";

export const useUserInfoStore = create<UserInfoStoreType>()((set) => ({
  userInfo: null,
  addUser: (user: UserType) => set({ userInfo: user }),
  deleteUser: () => set({ userInfo: null }),
}));
