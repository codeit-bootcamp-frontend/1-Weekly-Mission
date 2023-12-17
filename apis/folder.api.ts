import { AxiosResponse } from "axios";
import { FolderItem } from "../types/api";
import { http } from "./axios";

export const getFolderInfo = async (folderId: string | string[] | undefined) =>
  http.get(`folders/${folderId}`);
