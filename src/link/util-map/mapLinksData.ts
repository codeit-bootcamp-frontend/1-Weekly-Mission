import format from "date-fns/format";
import { getElapsedTime } from "sharing/util";

interface Link {
  id: string;
  createdAt: string;
  url: string;
  imageSource?: string;
  title?: string;
  description?: string;
}

export const mapLinksData = (link: Link) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
