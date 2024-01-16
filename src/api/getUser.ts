import { UserType } from "@/types/UserType";
import { axiosInstance } from "./axiosInstance";

export async function getUser() {
  const response = await axiosInstance.get<[UserType]>(`/users`);
  return response.data[0];
}

export async function getSharedUser(userId: string) {
  const response = await axiosInstance.get<[UserType]>(`/users/${userId}`);
  return response.data[0];
}
