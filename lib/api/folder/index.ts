import { ApiMapper } from "@/lib/apiMapper";
import request from "@/lib/axios";

interface GetLinksProps {
  id: number | null;
}

export interface GetLinkResponse {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  url: string;
  updated_at: string;
}

export const getLinks = async () => {
  const response = await request.get(ApiMapper.link.LINK, {
    type: "auth",
  });

  return response.data;
};

export const getFolders = async () => {
  const response = await request.get(ApiMapper.folder.get.GET_FOLDER, {
    type: "auth",
  });
  return response.data;
};

export const getFoldersId = async (id: number) => {
  const response = await request.get(
    `${ApiMapper.folder.get.GET_FOLDER}/${Number(id)}`
  );
  return response.data;
};

export const getLinksId = async (id: number) => {
  const response = await request.get(ApiMapper.link.get.GET_LINKS, {
    path: { folderId: id },
  });

  return response.data;
};

export const postLinks = async (data: { url: string; folderId: number }) => {
  const response = await request.post(ApiMapper.link.LINK, data, {
    type: "auth",
  });

  return response.data;
};
