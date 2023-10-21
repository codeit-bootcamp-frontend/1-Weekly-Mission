import moment from "moment/moment";

const cardCreatedAtConvert = (value) => {
  const today = moment();
  const createdDate = moment(value);

  const minute = today.diff(createdDate, "minutes");
  const hour = today.diff(createdDate, "hours");
  const day = today.diff(createdDate, "days");
  const month = today.diff(createdDate, "months");

  if (minute < 2) return "1 minute ago";
  else if (minute <= 59) return `${minute} minutes ago`;
  else if (minute >= 60 && minute < 120) return "1 hour ago";
  else if (hour <= 23) return `${hour} hours ago`;
  else if (hour >= 24 && hour < 48) return "1 day ago";
  else if (day <= 30) return `${day} days ago`;
  else if (day >= 31 && day < 62) return "1 month ago";
  else if (month <= 11) return `${month} months ago`;
  else if (month >= 12 && month < 24) return "1 year ago";
  else return `${Math.floor(month / 12)} years ago`;
};

export { cardCreatedAtConvert };
