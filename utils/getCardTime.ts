import dayjs from "dayjs";

import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import updateLocale from "dayjs/plugin/updateLocale";
const timeThresholds = [
  { l: "s", r: 1 },
  { l: "m", r: 1 },
  { l: "mm", r: 59, d: "minute" },
  { l: "h", r: 1 },
  { l: "hh", r: 23, d: "hour" },
  { l: "d", r: 1 },
  { l: "dd", r: 30, d: "day" },
  { l: "M", r: 1 },
  { l: "MM", r: 11, d: "month" },
  { l: "y", r: 1 },
  { l: "yy", d: "year" },
];

const relativeTimeLocale = {
  future: "in %s",
  past: "%s ago",
  s: "1 minute",
  m: "1 minute",
  mm: "%d minutes",
  h: "1 hour",
  hh: "%d hours",
  d: "1 day",
  dd: "%d days",
  M: "1 month",
  MM: "%d months",
  y: "1 year",
  yy: "%d years",
};

const extendDayjs = () => {
  dayjs.extend(relativeTime, { thresholds: timeThresholds });
  dayjs.extend(updateLocale);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.updateLocale("en", { relativeTime: relativeTimeLocale });
};

extendDayjs();

const getCardTimes = (createdAt) => {
  const now = dayjs().utc(true);
  const utcDate = dayjs.utc(createdAt);
  const fromNow = utcDate.from(now);
  const formattedDate = dayjs(utcDate).format("YYYY. M. DD");

  return { fromNow, formattedDate };
};

export default getCardTimes;
