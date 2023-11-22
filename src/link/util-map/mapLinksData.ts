import format from "date-fns/format";
import { SampleLink } from "folder/data-access-folder";
import { MappedLink } from "folder/util-map";
import { Link } from "link/data-access-link";
import { getElapsedTime } from "sharing/util";

export const mapLinksData = (link: Link | SampleLink): MappedLink => {
  const { id, url, title, description } = link;
  const imageSource = "imageSource" in link ? link.imageSource : link.image_source;
  const createdAt = "createdAt" in link ? link.createdAt : link.created_at;
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
