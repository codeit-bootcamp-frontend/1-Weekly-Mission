import format from "date-fns/format";
import { getElapsedTime } from "@/src/sharing/util";

export const mapLinksData = (link: {
  id: number;
  createdAt: string;
  imageSource: string;
  url: string;
  title: string;
  description: string;
}) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    title,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
