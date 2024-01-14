import { axiosInstance } from "./axiosInstance";

export default async function getAllCards() {
  const response = await axiosInstance.get(`/links`);
  return response.data;
}
