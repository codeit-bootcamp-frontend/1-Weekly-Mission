import { UserType } from "@/types/UserType";
import { axiosInstance } from "./axiosInstance";

// 로그인된 유저의 정보를 조회하는 api
export async function getUser() {
  const response = await axiosInstance.get<[UserType]>(`/users`);
  return response.data[0];
}

// 타 유저 정보를 조회하는 api
export async function getSharedUser(userId: string) {
  const response = await axiosInstance.get<[UserType]>(`/users/${userId}`);
  return response.data[0];
}
