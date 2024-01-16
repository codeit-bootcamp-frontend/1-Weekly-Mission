/*folder에 관한 api*/

import { FolderType } from "@/types/FolderType";
import { axiosInstance } from "./axiosInstance";

// 유저가 가진 모든 folders 리스트를 조회하는 api
export async function getFolderList() {
  const response = await axiosInstance.get(`/folders`);
  return response.data as [FolderType] | [];
}

// folder의 상세 정보를 조회하는 api
export async function getFolderInfo(folderId: string) {
  const response = await axiosInstance.get(`/folders/${folderId}`);
  return response.data;
}

// folder Create api
export async function createFolder(name: string) {
  const response = await axiosInstance.post(`/folders`, {
    name: name,
  });
  return response;
}

// folder Update api
export async function editFolder(folderId: string, name: string) {
  const response = await axiosInstance.put(`/folders/${folderId}`, {
    name: name,
  });
  return response;
}

// folder Delete api
export async function deleteFolder(folderId: string) {
  const response = await axiosInstance.delete(`/folders/${folderId}`);
  return response;
}

// TODO - userId 유저의 모든 폴더 조회 api
