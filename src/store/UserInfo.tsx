/* user 정보 관리를 위한 전역 상태관리 */

import { create } from "zustand";

import { UserType, UserInfoStoreType } from "@/types/UserType";

export const useUserInfoStore = create<UserInfoStoreType>((set) => ({
  // userInfo: user 값
  userInfo: null,
  // addUser: 로그인했다면 getUser api로 받아오는 data를 addUser 메소드를 사용해 userInfo 에 저장.
  addUser: (user: UserType) => set((state) => ({ ...state, userInfo: user })),
  // deleteUser: 로그아웃했다면 deleteUser 메소드를 통해 userInfo를 null로 초기화
  deleteUser: () => set((state) => ({ ...state, userInfo: null })),
}));
