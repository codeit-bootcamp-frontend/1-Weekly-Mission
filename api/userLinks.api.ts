import { fetchGet } from "./api";
import { UserLinksItem } from "../types/api";

interface fetchUserLinksProps {
  userId: number;
  folderId: string | undefined | string[];
}

export const fetchUserLinks = ({
  userId = 1,
  folderId = "all",
}: fetchUserLinksProps) => {
  const query = `/api/users/${userId}/links${
    folderId !== "all" ? `?folderId=${folderId}` : ""
  }`;
  return fetchGet(query) as Promise<{ data: UserLinksItem[] }>;
};
