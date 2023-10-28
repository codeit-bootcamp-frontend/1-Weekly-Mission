export function dateCalculator(apiDate) {
  let myDate = new Date();
  let elapsedMinute = Math.floor((myDate - apiDate) / 1000 / 60);
  let elapsedHour = Math.floor((myDate - apiDate) / 1000 / 60 / 60);
  let elapsedDays = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24);
  let elapsedMonth = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24 / 31);
  let elapsedYear = Math.floor(
    (myDate - apiDate) / 1000 / 60 / 60 / 24 / 31 / 12
  );

  function timeExpress(time, calcTime) {
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
