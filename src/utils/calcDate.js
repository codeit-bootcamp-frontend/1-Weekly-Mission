function calcDate(value) {
  const now = new Date(); // 현재 날짜 및 시간
  const createdDate = new Date(value);

  const helpCalc = (time, condition, str) => {
    if (time < 2) {
      return `1 ${str} ago`;
    } else if (time < condition) {
      return `${Math.floor(time)} ${str}s ago`;
    }
    return "";
  };

  let minute = (now - createdDate) / 1000 / 60;
  let str = helpCalc(minute, 60, "minute");
  if (str) return str;

  let hour = minute / 60;
  str = helpCalc(hour, 24, "hour");
  if (str) return str;

  let day = hour / 24;
  str = helpCalc(day, 31, "day");
  if (str) return str;

  let month = day / 31;
  str = helpCalc(month, 12, "month");
  if (str) return str;

  let year = month / 12;
  str = helpCalc(year, 100, "year");
  if (str) return str;
}

export default calcDate;
