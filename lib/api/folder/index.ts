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

// TODO api check
export const handleGetLinks = async ({ id }: GetLinksProps) => {
  try {
    const query = id ? { folderId: id } : "";

    const result = await request.get(ApiMapper.link.get.GET_LINK, {
      query: query,
      type: "auth",
    });

    if (result.status === 200) {
      const res: GetLinkResponse[] = result.data.data.folder;
      return res;
    }

    throw new Error();
  } catch (e) {
    alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    return [];
  }
};

export const getFolders = async () => {
  const response = await request.get(ApiMapper.folder.get.GET_FOLDER, {
    type: "auth",
  });
  return response.data;
};
