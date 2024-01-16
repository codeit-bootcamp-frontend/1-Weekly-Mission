import { UserType } from "@/types/UserType";
import { axiosInstance } from "./axiosInstance";

export async function getUser() {
  const response = await axiosInstance.get<[UserType]>(`/users`);
  return response.data[0];
}
