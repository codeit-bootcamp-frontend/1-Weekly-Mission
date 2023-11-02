import moment from 'moment';

const PastTime = (createdAt) => {
  const targetDate = new Date('2023-10-29T01:00:00Z');
  const cardDate = new moment(createdAt).format("YYYY.M.DD");
  const createdAtDate = new Date(createdAt);
  const timeDiff = (targetDate - createdAtDate) / 1000; // 초 단위로 변환

  let message = '';

  if (timeDiff < 60) {
    message = 'Less than a minute ago';
  } else if (timeDiff < 3600) {
    message = `${Math.floor(timeDiff / 60)} minutes ago`;
  } else if (timeDiff < 86400) {
    message = `${Math.floor(timeDiff / 3600)} hours ago`;
  } else if (timeDiff < 2592000) {
    message = `${Math.floor(timeDiff / 86400)} days ago`;
  } else if (timeDiff < 31536000) {
    message = `${Math.floor(timeDiff / 2592000)} months ago`;
  } else {
    message = `${Math.floor(timeDiff / 31536000)} years ago`;
  }

  return {message, cardDate};
};

export default PastTime;