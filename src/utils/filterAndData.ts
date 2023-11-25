import { LinkData } from "src/utils/getData.type";

export const formatDate = (value: string) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export const filterLinks = (links: LinkData[], type: string, folderId: string) => {
  if (type === "searchById") {
    return links.filter((link) => link.folder_id === Number(folderId));
  }
  if (type === "searchByKeyword") {
    return links.filter((link) => {
      const arr = [link.title, link.url, link.description];
      return arr.some((item) => item?.toLowerCase().includes(folderId.toLowerCase()));
    });
  }
};

export const filterFolder = (links: LinkData[], folderId: string | null) => {
  if (!links) return;
  if (!folderId) return links;
  if (Number(folderId)) return filterLinks(links, "searchById", folderId);
  return filterLinks(links, "searchByKeyword", folderId);
};
