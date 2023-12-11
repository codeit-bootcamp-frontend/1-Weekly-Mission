export function dateCalculator(apiDate: Date) {
  const myDate: Date = new Date();
  const dateCalc = +myDate - +apiDate;
  const elapsedMinute = Math.floor(dateCalc / 1000 / 60);
  const elapsedHour = Math.floor(elapsedMinute / 60);
  const elapsedDays = Math.floor(elapsedHour / 24);
  const elapsedMonth = Math.floor(elapsedDays / 31);
  const elapsedYear = Math.floor(elapsedMonth / 12);

  function timeExpress(time: string, calcTime: number) {
    return `${calcTime} ${time}${calcTime === 1 ? '' : 's'} ago`;
  }

  if (elapsedMinute < 60) {
    return timeExpress('minute', elapsedMinute);
  }
  if (elapsedHour < 24) {
    return timeExpress('hour', elapsedHour);
  }
  if (elapsedDays < 31) {
    return timeExpress('day', elapsedDays);
  }
  if (elapsedMonth < 12) {
    return timeExpress('month', elapsedMonth);
  }
  if (elapsedYear) {
    return timeExpress('year', elapsedYear);
  }
}
