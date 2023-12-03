import { fetchGet } from "./api";
import { UserProfileSampleItem } from "../types/api";

export const fetchUserProfileSample = () =>
  fetchGet("/api/sample/user") as Promise<UserProfileSampleItem>;
