import { CardProps } from "@/components/Main/CardList/CardList.type";
import { PATHS } from "@/constants/path";
import { Rlink, RsampleFolder } from "@/utils/getData.type";

export const formatDate = (value: string) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export const filterLinks = (data: CardProps[], keyword = "") => {
  if (!keyword) return data;

  return data.filter((link) => {
    const arr = [link.title, link.url, link.description];
    return arr.some((item) => item.toLowerCase().includes(keyword.toLowerCase()));
  });
};
