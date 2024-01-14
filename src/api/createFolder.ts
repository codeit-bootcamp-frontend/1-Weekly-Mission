import { axiosInstance } from "./axiosInstance";

export default async function createFolder(name: string) {
  const response = await axiosInstance.post(`/folders`, {
    name: name,
  });

  return response;
}
