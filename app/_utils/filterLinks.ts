import { LinkType } from "@/types/type";

export const filterLinks = (links?: LinkType[], keyword?: string | null) => {
  if (!links) return;
  if (!keyword) return links;

  const normalizedKeyword = keyword.toLowerCase().replace(/\s+/g, "");
  return links?.filter(({ url, title, description }) => {
    const searchText = `${url}${title}${description}`.toLowerCase().replace(/\s+/g, "");

    return searchText.includes(normalizedKeyword);
  });
};
