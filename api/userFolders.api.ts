import { fetchGet } from "./api";
import { FolderItem } from "../types/api";

export const fetchUserFolders = (userId: number) =>
  fetchGet(`/api/users/${userId}/folders`) as Promise<{
    data: FolderItem[];
  }>;
