const formatDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const formattedCreatedAt = `${year}. ${month}. ${dayOfMonth}`;
  return formattedCreatedAt;
};

const getTimeDiff = (target, base = new Date()) => {
  const targetDate = new Date(target);
  return base - targetDate;
};

const prettyFormatTimeDiff = (diff) => {
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (minutes < 2) {
    return "1 minute ago";
  }

  if (minutes <= 59) {
    return `${minutes} minutes ago`;
  }

  if (minutes <= 60) {
    return "1 hour ago";
  }

  if (hours <= 23) {
    return `${hours} hours ago`;
  }

  if (hours <= 24) {
    return "1 day ago";
  }

  if (days <= 30) {
    return `${days} days ago`;
  }

  if (days <= 31) {
    return `1 month ago`;
  }

  if (months <= 11) {
    return `${months} months ago`;
  }

  if (months <= 12) {
    return `1 year ago`;
  }

  return `${years} years ago`;
};

const shareKakao = (route) => {
  const { Kakao } = window;
  if (Kakao) {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }

    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "LinkBrary",
        description: "나의 즐겨찾기 목록을 공유해 보세요!",
        imageUrl:
          "https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr",
        link: {
          mobileWebUrl: route,
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "보러가기",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};

const shareFacebook = (route) => {
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    route
  )}`;

  window.open(facebookShareURL, "_blank");
};

const typeCheckParam = (type, param) => {
  return typeof param === type ? +param : undefined;
};

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPIrOzOqWhbuHYvw7yNBxK9w/7/+s+g7xSiJaG+eeNBBgY2UUev6LKyZgByfxCvAnvQuAAAAABJRU5ErkJggg==";

export {
  formatDate,
  getTimeDiff,
  prettyFormatTimeDiff,
  shareKakao,
  shareFacebook,
  typeCheckParam,
  blurDataURL,
};
