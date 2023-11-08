import { format } from "timeago.js";

export const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  return date.toLocaleDateString();
};

export const formatTimeDiff = (createdAt) => {
  return format(createdAt, "en_US");
};
