import { axiosInstance } from "./axiosInstance";

export default async function deleteCard(cardId: string) {
  const response = await axiosInstance.delete(`/links/${cardId}`);
  return response;
}
