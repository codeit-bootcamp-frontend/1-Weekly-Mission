import { PERIOD_CONTENT } from "constants/date";

function formatPeriod(createdAt: string) {
  // 윤년
  function leapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const currentDate = +new Date();
  const apiDate = +new Date(createdAt);
  const timeGap = currentDate - apiDate;

  const resultDate = new Date(timeGap);
  let year = resultDate.getFullYear();
  const month = resultDate.getMonth();
  const day = resultDate.getDate() - 1;
  const hour = resultDate.getHours();
  const minutes = resultDate.getMinutes();

  if (leapYear(year)) {
    year += 1;
  }

  if (year > 1970) {
    return `${year - 1970} ${PERIOD_CONTENT.year}`;
  }

  switch (year === 1970) {
    case month >= 12:
      return `1 ${PERIOD_CONTENT.singular.year}`;
    case month > 0 && month <= 11:
      return `${month} ${PERIOD_CONTENT.month}`;
    case day >= 31:
      return `1 ${PERIOD_CONTENT.singular.month}`;
    case day > 0 && day <= 30:
      return `${day} ${PERIOD_CONTENT.day}`;
    case hour >= 24:
      return `1 ${PERIOD_CONTENT.singular.day}`;
    case hour > 0 && hour <= 23:
      return `${hour} ${PERIOD_CONTENT.hour}`;
    case minutes >= 60:
      return `1  ${PERIOD_CONTENT.singular.hour}`;
    case minutes > 0 && minutes <= 59:
      return `${minutes} ${PERIOD_CONTENT.singular.minute}`;
    case minutes < 2:
      return `1 ${PERIOD_CONTENT.singular.minute}`;
    default:
      return;
  }
}

export default formatPeriod;
