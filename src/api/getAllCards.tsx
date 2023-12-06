import { CardInterface } from "@/types";
import { axiosInstance } from "./axiosInstance";
import { USER_ID } from "./constants";

export default async function getAllCards(id = "") {
  let url = "";
  if (id === "") {
    url = `${USER_ID}/links`;
  } else {
    const query = `?folderId=${id}`;
    url = `${USER_ID}/links${query}`;
  }
  const response = await axiosInstance.get(`${url}`);
  const data: CardInterface[] = response?.data?.data;
  return data;
}
