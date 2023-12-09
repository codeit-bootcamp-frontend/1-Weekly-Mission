import { PATHS } from "@/constants/path";
import { Rlink, RsampleFolder } from "@/utils/getData.type";

export const formatDate = (value: string) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export const filterFolder = (data: RsampleFolder | Rlink, keyword = "", id = "") => {
  if (!data) return;
  if (!keyword && !id) return data.links;

  let filteredData;
  if (data.path === PATHS.FOLDER_LINKS && id) {
    filteredData = data.links.filter((link) => link.folder_id === Number(id));
  }
  if (data.path === PATHS.SHARED_FOLDER && id) {
    filteredData = data.links.filter((link) => link.id === Number(id));
  }
  return (filteredData || data.links).filter((link) => {
    const arr = [link.title, link.url, link.description];
    return arr.some((item) => item.toLowerCase().includes(keyword.toLowerCase()));
  });
};
