import { format, formatDistanceToNowStrict } from "date-fns";

const formatDate = (timeValue) => {
  return format(new Date(timeValue), "yyyy. MM. dd");
};

const convertCreatedAt = (timeValue) => {
  const dateFormat = formatDistanceToNowStrict(new Date(timeValue)).split(" ");
  const dateLen = dateFormat.length;
  const number = dateFormat[dateLen - 2];
  const text = dateFormat[dateLen - 1];
  return `${number} ${text} ago`;
};

export { convertCreatedAt, formatDate };
