export const changeDateFormat = (targetDate) => {
  const changedDate = new Date(targetDate);
  const year = changedDate.getFullYear();
  const month = changedDate.getMonth() + 1;
  const day = changedDate.getDate();
  const hour = changedDate.getHours();
  const minutes = changedDate.getMinutes();
  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minutes: minutes,
  };
};

export const compareNowAndAfter = (now, target) => {
  //  now가 target보다 date가 빠르다
  let str = "";
  let calYear = now.year - target.year;
  let calMonth = now.month - target.month;

  // 케이스 2분미만 && 2분~59분
  // 조건 year, month, day, hour가 같고 minute로 결정
  if (
    now.year === target.year &&
    now.month === target.month &&
    now.day === target.day &&
    now.hour === target.hour
  ) {
    let result = now.minutes - target.minutes;
    if (result === 1) {
      str = `${result} minute ago`;
      return str;
    } else if (result > 1) {
      str = `${result} minutes ago`;
      return str;
    }
  } else if (
    now.year === target.year &&
    now.month === target.month &&
    now.day === target.day
  ) {
    // 60분 (1시간)
    if (now.hour - target.hour === 1 && now.minutes === target.minutes) {
      str = `1 hour ago`;
      return str;
    }
    // 61분~ 1339 (23시간 59분..)
    // 1440이 24시간..
    let nowHourToMinutes = now.hour * 60 + now.minutes;
    let targetHourToMinutes = target.hour * 60 + target.minutes;
    let result = nowHourToMinutes - targetHourToMinutes;
    if (result >= 61 && result <= 1339) {
      result = Math.floor(result / 60);
      str = `${result} hours ago`;
      return str;
    }
    // 24시간 이상은  day가 다르다 한달전까지.. day 단위를 사용한다
  } else if (now.year === target.year && now.month === target.month) {
    if (
      now.day - target.day === 1 &&
      now.hour === target.hour &&
      now.minutes === target.minutes
    ) {
      str = `1 day ago`;
      return str;
    }
  }
};
