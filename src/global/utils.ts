import moment from "moment";

export const formatDateDifference = (createdAt: string) => {
  const createdDate = moment(createdAt);
  return createdDate.fromNow();
};

export const formatDate = (createdAt: string) => {
  const date = moment(createdAt);
  const formattedDate = date.format("YYYY. M. DD");
  return formattedDate;
};
