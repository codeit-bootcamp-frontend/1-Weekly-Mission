import { UserType } from "@/types/UserType";
import { axiosInstance } from "./axiosInstance";

export default async function getUser() {
  const response = await axiosInstance.get<[UserType]>(`/users`);
  return response.data[0];
}
