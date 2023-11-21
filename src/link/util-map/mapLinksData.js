import format from "date-fns/format";
import { getElapsedTime } from "sharing/util";

export const mapLinksData = (link) => {
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
