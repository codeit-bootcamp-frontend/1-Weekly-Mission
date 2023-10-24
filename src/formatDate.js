class FormatData {
  constructor(createAt) {
    this.createAt = new Date(createAt);
    this.currentTime = new Date();
  }

  ymd = () => {
    const date = this.createAt;
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  timeAgo = () => {
    const timeDifference = (this.currentTime - this.createAt) / 1000;

    const minutes = Math.floor(timeDifference / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (minutes < 1) {
      return '1 분 전';
    } else if (minutes <= 59) {
      return `${minutes} 분 전`;
    } else if (hours < 1) {
      return '1 시간 전';
    } else if (hours <= 23) {
      return `${hours} 시간 전`;
    } else if (days < 1) {
      return '1 일 전';
    } else if (days <= 30) {
      return `${days} 일 전`;
    } else if (months < 1) {
      return '1 개월 전';
    } else if (months <= 11) {
      return `${months} 개월 전`;
    } else if (years < 1) {
      return '1 년 전';
    } else {
      return `${years} 년 전`;
    }
  };
}

export default FormatData;
