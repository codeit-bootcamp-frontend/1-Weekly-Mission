import { Link, MappedLink, SampleLink } from "@/types/type";
import getElapsedTime from "./getElapsedTime";
import defaultImage from "@/images/defaultLinkImage.png";

const mapLinksData = (link: Link | SampleLink): MappedLink => {
  const { id, url, title, description } = link;
  const imageSource = "imageSource" in link ? link.imageSource : link.image_source || defaultImage.src;
  const createdAt = "createdAt" in link ? link.createdAt : link.created_at;
  const { fromNow, formattedDate } = getElapsedTime(createdAt);
  return {
    id,
    url,
    title,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: fromNow,
    description,
    createdAt: formattedDate,
  };
};

export default mapLinksData;
