import { fetchGet } from "./api";
import { SampleFolderItem } from "../types/api";

export const fetchSampleFolder = () =>
  fetchGet("/api/sample/folder") as Promise<{ folder: SampleFolderItem }>;
