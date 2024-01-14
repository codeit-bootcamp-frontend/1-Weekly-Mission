import { axiosInstance } from "./axiosInstance";

export default async function createCard(url: string, folderId: string) {
  const response = await axiosInstance.post(`/links`, {
    url: url,
    folderId: folderId,
  });

  return response;
}
