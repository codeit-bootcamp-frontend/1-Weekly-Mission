import moment, { Moment } from 'moment';

interface TimeInfo {
  message: string;
  cardDate: string;
}

const PastTime = (createdAt?: string): TimeInfo => {
  const targetDate = new Date('2023-10-29T01:00:00Z');
  const defaultCreatedAt = createdAt || new Date().toISOString();

  const cardDate = moment(createdAt).format('YYYY.M.DD');
  const createdAtDate = new Date(defaultCreatedAt);
  const timeDiff = (targetDate.getTime() - createdAtDate.getTime()) / 1000; // 초 단위로 변환

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

  return { message, cardDate };
};

export default PastTime;
