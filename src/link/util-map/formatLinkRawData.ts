import { LinkRawData } from "../type";

export const formatLinkRawData = ({
  id,
  created_at,
  url,
  image_source,
  title,
  description,
}: LinkRawData) => ({
  id,
  createdAt: created_at,
  imageSource: image_source,
  url,
  title,
  description,
});
