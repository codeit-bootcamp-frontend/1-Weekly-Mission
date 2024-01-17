import { LinkData } from "@/types/link";

export const checkMatchedAllLinks = (keyword: string, links: LinkData[]) => {
  const filteredLinks = links.filter((link) => {
    return (
      (link.title && link.title.includes(keyword)) ||
      (link.description && link.description.includes(keyword)) ||
      (link.url && link.url.includes(keyword))
    );
  });
  return filteredLinks;
};
