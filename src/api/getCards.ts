import { axiosInstance } from "./axiosInstance";

export default async function getCards(folderId: string) {
  const response = await axiosInstance.get(`/folders/${folderId}/links`);
  return response.data;
}
