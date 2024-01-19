import { cookies } from "next/headers";
import * as T from "@/types/apiType";
import { CacheType, InstanceProps, ResponseProps } from "@/types/instanceType";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getAccessTokenByServer = () => {
  const cookieStore = cookies();
  return cookieStore.get("accessToken")?.value;
};

const serverInstance = async <T>({ method, url, body, cache }: InstanceProps) => {
  const accessToken = getAccessTokenByServer();

  const response = await fetch(`${BASE_URL}${url}`, { method, body: JSON.stringify(body), ...cache, ...(accessToken && { headers: { Authorization: `Bearer ${accessToken}` } }) });

  if (response.status >= 400) {
    const res: ResponseProps<T> = {
      state: "error",
      error: { status: response.status, ...(await response.json()) },
    };
    return res;
  } else {
    const res: ResponseProps<T> = {
      state: "success",
      data: await response.json(),
    };
    return res;
  }
};

const serverRequest = {
  get: <T>(url: string, cache?: CacheType) => serverInstance<T>({ method: "GET", url, cache }),
};

const user = {
  getUser: async (cache?: CacheType) => await serverRequest.get<T.ResGetUser>("/users", cache),
  getUserById: async (userId: number, cache?: CacheType) => await serverRequest.get<T.ResGetUser>(`/users/${userId}`, cache),
};

const folder = {
  getFolders: async (cache?: CacheType) => await serverRequest.get<T.ResGetFolders>("/folders", cache),
  getFolderById: async (folderId: number, cache?: CacheType) => await serverRequest.get<T.ResGetFolders>(`/folders/${folderId}`, cache),
};

const link = {
  getLinks: async (cache?: CacheType) => await serverRequest.get<T.ResGetLinks>("/links", cache),
  getLinksById: async (folderId: number, cache?: CacheType) => await serverRequest.get<T.ResGetLinks>(`/folders/${folderId}/links`, cache),
};

const SERVER_API = {
  user,
  folder,
  link,
};

export default SERVER_API;
