import { API } from "../config";

export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface GetSampleFolderResponse {
  folder: {
    id: number;
    name: string;
    owner: {
      id: string;
      name: string;
      profileImageSource: string;
    };
    links: Link[];
  };
}
export async function getSampleFolder() {
  const res = await fetch(API.sampleFolder);
  const userFolder = await res.json();
  if (res?.status === 200) return userFolder as GetSampleFolderResponse;
  return [];
}
