import moment from "moment";

export const formatDateDifference = (createdAt) => {
  const createdDate = moment(createdAt);
  return createdDate.fromNow();
};

export const formatDate = (createdAt) => {
  const date = moment(createdAt);
  const formattedDate = date.format("YYYY. M. DD");
  return formattedDate;
};
