import { create } from "zustand";

import { UserType, UserInfoStoreType } from "@/types/UserType";

export const useUserInfoStore = create<UserInfoStoreType>((set) => ({
  userInfo: null,
  addUser: (user: UserType) => set((state) => ({ ...state, userInfo: user })),
  deleteUser: () => set((state) => ({ ...state, userInfo: null })),
}));
