import { FolderType } from "@/types/FolderType";
import { axiosInstance } from "./axiosInstance";

export default async function getFolderList() {
  const response = await axiosInstance.get(`/folders`);
  return response.data as [FolderType] | [];
}
