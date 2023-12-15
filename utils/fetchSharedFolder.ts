import { Links } from "@/types/type";
import { axiosInstance } from "./axiosInstance";

interface Folder {
  data: {
    id: number;
    created_at: string;
    name: string;
    user_id: number;
  }[];
}

interface User {
  data: {
    id: number;
    created_at: string;
    name: string;
    image_source: string;
    email: string;
    auth_id: string;
  }[];
}
const fetchSharedFolder = async (folderId: string) => {
  const folderRes = await axiosInstance.get<Folder>(`folders/${folderId}`);
  const folderData = folderRes.data.data[0];
  const userId = folderData.user_id;

  const [userRes, linksRes] = await Promise.all([
    axiosInstance.get<User>(`users/${userId}`),
    axiosInstance.get<Links>(`users/${userId}/links?folderId=${folderId}`),
  ]);

  const userData = userRes.data.data[0];

  return {
    data: {
      folder: {
        id: folderData.id,
        name: folderData.name,
      },
      owner: {
        userId: userData.id,
        name: userData.name,
        profileImageSource: userData.image_source,
      },
      links: linksRes.data?.data,
    },
  };
};
export default fetchSharedFolder;
