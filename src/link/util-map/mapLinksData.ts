import format from "date-fns/format";
import { getElapsedTime } from "@/src/sharing/util";
import { Link, LinkRawData } from "../type";

export const mapLinksData = (link: LinkRawData) => {
  const { id, created_at, url, image_source, title, description } = link;

  return {
    id,
    title,
    url,
    imageSource: image_source,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(created_at),
    description,
    createdAt: format(new Date(created_at), "yyyy. MM. dd"),
  };
};
