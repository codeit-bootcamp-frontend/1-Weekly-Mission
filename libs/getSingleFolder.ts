import axios from "@/libs/axios";

export async function getSingleFolder(id: number) {
  const temp = await axios.get(`/users/1/links?folderId=${id}`);
  return temp;
}
