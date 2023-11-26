import format from "date-fns/format";
import { getElapsedTime } from "sharing/util";
import { SampleLink } from "folder/data-access-folder";
import { MappedLink } from "folder/util-map";

// interface MapLinksDataProps {
//   id: number;
//   url: string;
//   imageSource: string;
//   alt: string;
//   elapsedTime: string;
//   description: string;
//   createdAt: Date;
//   title: string;
// }

interface MapLinksDataProps {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}
export const mapLinksData = (
  link: MapLinksDataProps | SampleLink
): MappedLink => {
  const { id, url, title, description } = link;
  const imageSource =
    "imageSource" in link ? link.imageSource : link.image_source;
  const createdAt = "createdAt" in link ? link.createdAt : link.created_at;

  return {
    id,
    url,
    title,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
