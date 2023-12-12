import { CardInterface } from "@/types";
import { USER_ID } from "./constants";
import { axiosInstance } from "./axiosInstance";

export default async function getAllCards(id = "") {
  let url = `${USER_ID}/links?`;
  const searchUrl = new URLSearchParams();
  if (id !== "") {
    searchUrl.append("folderId", id);
    url += searchUrl.toString();
  }

  const response = await axiosInstance.get(`${url}`);
  const data: CardInterface[] = response?.data?.data;
  return data;
}
