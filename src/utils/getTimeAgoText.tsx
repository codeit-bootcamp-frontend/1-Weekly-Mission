function getMinsDiffFromNow(ISOInputDate: string) {
  const now = Date.now();
  const nowDate = new Date(now);
  const inputDate = new Date(ISOInputDate);
  const diffMSec = nowDate.getTime() - inputDate.getTime();
  const diffMin = diffMSec / (60 * 1000);
  return diffMin; // diffMin = "created_at ~ 현재"의 시간 차이. 얼마나 지났는지
}

function calculateTimeAgo(diffMin: number) {
  // 주어진 조건에 맞게 "~~ ago" 텍스트 구하기
  diffMin = Math.floor(diffMin);
  const MIN_FOR_ONE_DAY = 24 * 60,
    DAY_FOR_ONE_MONTH = 31; // 정확히 주어지지 않음.
  let diffDay = 0;
  if (diffMin >= MIN_FOR_ONE_DAY) {
    diffDay = Math.floor(diffMin / MIN_FOR_ONE_DAY);
  } else {
    // 시간 차이 24시간 미만 => min 단위로 생각.
    if (diffMin < 60) {
      // 시간 차이 60분 미만일 때, (2분 미만 : 2분 이상)
      return diffMin < 2 ? "1 minute" : `${diffMin} minutes`;
    }
    // 시간 차이 60분 이상, 24시간 미만일 때, (2시간 미만 : 2시간 이상)
    return diffMin < 2 * 60 ? "1 hour" : `${Math.floor(diffMin / 60)} hours`;
  }

  // 사간 차이 24시간 이상 => 이제부턴 day 단위로 생각.
  if (diffDay >= 365) {
    // 시간 차이 1년 이상일 때, (2년 미만 : 2년 이상)
    return diffDay < 2 * 365 ? "1 year" : `${Math.floor(diffDay / 365)} years`;
  }
  if (diffDay < DAY_FOR_ONE_MONTH) {
    // 시간 차이 1달 이내일 때, (2일 미만 : 2일 이상)
    return diffDay < 2 ? "1 day" : `${diffDay} years`;
  }
  // 시간 차이 1달 이상 1년 미만일 때, (2달 미만 : 2달 이상)
  return diffDay < 2 * DAY_FOR_ONE_MONTH
    ? "1 month"
    : `${Math.floor(diffDay / 31)} months`;
}

function getTimeAgoText(created_at: string) {
  const minsDiffFromNow = getMinsDiffFromNow(created_at);
  return calculateTimeAgo(minsDiffFromNow);
}
export default getTimeAgoText;
