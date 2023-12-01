import { format } from 'timeago.js';

export const formatDate = (createdAt: string) => {
  const date = new Date(createdAt);
  return date.toLocaleDateString();
};

export const formatTimeDiff = (createdAt: string) => {
  return format(createdAt, 'en_US');
};
