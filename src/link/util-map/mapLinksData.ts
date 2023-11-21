import format from "date-fns/format";
import { MappedLink } from "folder/util-map";
import { getElapsedTime } from "sharing/util";

export interface Link {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export const mapLinksData = (link: Link): MappedLink => {
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
