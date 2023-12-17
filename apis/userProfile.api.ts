import { fetchGet } from "./api";
import { UserProfileItem } from "../types/api";

export const fetchUserProfile = (userId: number) =>
  fetchGet(`/api/users/${userId}`) as Promise<{
    data: UserProfileItem[];
  }>;
